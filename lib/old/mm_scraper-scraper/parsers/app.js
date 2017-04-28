let CronJob = require('cron').CronJob;
let colors = require('colors');
var request = require('request');
let config = require('./config');
let drivers = {
  mongo: require('./drivers/db_mongo'),
  mysql: require('./drivers/db_mysql'),
};
let db = drivers[config.database.driver];
let parsers = require('./ext/parser');

let logger = console.log.bind(console, 'app.js ---> ');

let revisionIteration = function(callback) {
  logger('revisionIteration');

  db.Revisions.find({
    processed: false
  }).limit(config.batches.revisions).exec(function(err, revisions) {
    logger(`revisions.find, count: ${revisions.length}, err: ${err}`);
    let models = (revisions || [])
      .map(revision => {
        return {
          article: db.Articles.findOne({
            _id: db.IDBuilder(revision.articleId)
          }),
          revision: revision
        };
      })
      .map(obj => parsers.parseRevision(obj))
      .map(promise => {
        return promise.then(revision => {
          // because revision can be stored much later then calculated for dynamic data
          revision.loadedAt = new Date();

          return revision.save().catch(function(err) {
            if (err) logger(`revisions.save err: ${err}`);
          });
        });
      });

    return callback(Promise.all(models));
  });
};

let articleIteration = function(callback) {
  logger('articleIteration');

  db.Articles.find({
    processed: false
  }).limit(config.batches.articles).exec(function(err, articles) {
    logger(`articles.find, count: ${articles.length}, err: ${err}`);

    let models = (articles || [])
      .map(article => {
        return {
          revision: db.Revisions.findOne({
            articleId: db.IDBuilder(article._id)
          }),
          article: article
        };
      })
      .map(obj => parsers.parseArticle(obj))
      .map(promise => {
        return promise.then(article => {
          article.counter++;

          return article.save().catch(function(err) {
            if (err) logger(`articles.save err: ${err}`);
          });
        });
      });

    return callback(Promise.all(models));
  });
};

let fetchRevisions = function() {
  return new Promise((then, fail) => {
    logger('fetchIteration');

    db
      .Articles
      .find(`\`lastUpdated\` <= (NOW() - INTERVAL ${Math.floor(config.revisionsUpdateDelta / 1000)} SECOND)`)
      .order('lastUpdated')
      .limit(config.batches.fetches)
      .exec(function(err, articles) {
        logger(`fetchArticles.find, count: ${articles.length}, err: ${err}`);
        let models = (articles || [])
          .map(article => {
            return parsers.fetchRevision(article);
          })
          .map(promise => {
            return promise.then(data => {
              let model = {
                articleId: db.IDBuilder(data.article._id),
                loadedAt: new Date(),
                rawContent: data.raw,
                resource: data.article.resource,
                processed: false,
                valid: false,
                likes: 0,
                shares: 0,
                views: 0,
                comments: 0,
                shareableWith: ''
              };

              let revision = new db.Revisions(model);

              data.article.lastUpdated = new Date();
              data.article.counter += 1;
              data.article.save().then(() => {
                console.log('Mark article as updated --->'.green, data.article.url);
              }).catch(function(err) {
                if (err) logger(`fetchRevisions.article.save err: ${err}`);
              });

              return revision.save().catch(function(err) {
                if (err) logger(`fetchRevisions.revision.save err: ${err}`);
              })
            });
          });

        return Promise.all(models).then(then).catch(err => {
          logger(`fetchIteration.promise.all err: ${err}`);
          return then();
        });
      });
  });
};

let revisionIterActive = !config.iterations.iterateRevisions;
let articleIterActive = !config.iterations.iterateArticles;

let iteration = function() {
  if (!revisionIterActive) {
    revisionIterActive = true;
    console.time('app.js ---> revisionIteration.time'.bgBlue.red);
    fetchRevisions().then(() => {
      let unlock = function() {
        return setTimeout(function() {
          revisionIterActive = false;
          console.timeEnd('app.js ---> revisionIteration.time'.bgBlue.red);
        }, config.revisionsPauseDelta);
      };
      logger('fetchRevisions.completed'.yellow, new Date().toISOString());

      logger('revisionIteration.start'.yellow, new Date().toISOString());
      revisionIteration(promises => promises.then(() => {
        logger('revisionIteration.completed'.bgBlue.red);
        return unlock();
      }).catch(err => {
        logger(`revisions.iteration error when saving docs, err: ${err}`);
        return unlock();
      }));
    });
  }

  if (!articleIterActive) {
    articleIterActive = true;
    console.time('app.js ---> articleIteration.time'.bgBlue.green);
    articleIteration(promises => promises.then(() => {
      logger('articleIteration.completed'.bgBlue.green);
      articleIterActive = false;
      console.time('app.js ---> articleIteration.time'.bgBlue.green);
    }).catch(err => {
      logger(`articles.iteration error when saving docs, err: ${err}`);
      articleIterActive = false;
      console.time('app.js ---> articleIteration.time'.bgBlue.green);
    }));
  }
};

let connection = db.connect(config.database);
let job = new CronJob(config.cron, iteration, null, true, 'America/Los_Angeles');
