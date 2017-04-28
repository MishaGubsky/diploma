let request = require("request");
let cheerio = require("cheerio");
let config = require('./../config');
let proxies = require('./../lib/proxies');
let fb_metrics = require('./../lib/facebook_metrics');

const contributions = (buzzid) => `https://www.buzzfeed.com/_comments/${buzzid}/contributions`;
const impressions = (buzzid) => `https://www.buzzfeed.com/api/v2/buzz/${buzzid}`;
let req = (url, cb) => {
  let proxy = proxies.getProxy();
  return request({
    url: url,
    timeout: 7500,
    proxy: proxy,
  }, cb);
}

let parseRevision = function(data, article, resolve, reject) {
  let revision = data.revision;
  let html = revision.rawContent;
  let $ = cheerio.load(html);
  let url = article.url;

  let buzzid = $('meta[property="bf:buzzid"]').attr('content');
  let contributionsUrl = contributions(buzzid);
  let impressionsUrl = impressions(buzzid);

  revision.shareableWith =
    'facebook;email;pinterest;twitter;tumblr;bookmark;reddit;stumbleupon;google;linkedin;direct-link';
  revision.shares = 0;
  revision.comments = 0;
  revision.views = 0;
  revision.valid = false;

  let loadImpressions = function(next) {
    if (config.parsers.buzzfeed.disabled.views) return next();
    let attempts = 0;

    let attempt = () => {
      return req(impressionsUrl, function(error, res, body) {
        if (!error) {
          try {
            let json = JSON.parse(body);
            if (json.success === 1) {
              revision.views += (+json.buzz.impressions) || 0;
              revision.valid = true;
            } else {
              if (attempts < config.parsers.buzzfeed.fetchAttempts) {
                attempts++;
                return setTimeout(
                  () => attempt(),
                  config.parsers.buzzfeed.fetchDelay + Math.random() * config.parsers.buzzfeed.fetchDelayRandom
                );
              } else return next();
            }
          } catch (e) {
            console.error(`_id: ${revision._id}, loadImpressions err: ${e}, stack: ${e.stack}`);
          }
          return next();
        } else {
          if (attempts < config.parsers.buzzfeed.fetchAttempts) {
            attempts++;
            return setTimeout(
              () => attempt(),
              config.parsers.buzzfeed.fetchDelay + Math.random() * config.parsers.buzzfeed.fetchDelayRandom
            );
          } else return next();
        }
      });
    };
    return attempt();
  };

  let complete = function() {
    console.log('Process revision --->'.red, article.title);
    if (article.processed === 1) {
      revision.rawContent = '';
    }
    revision.processed = true;
    return resolve(revision);
  };

  let loadContributions = function() {
    if (config.parsers.buzzfeed.disabled.comments) return complete();

    return req(contributionsUrl, function(error, res, body) {
      if (!error) {
        try {
          let count = (body.match(/contrib\s?\s?bf_dom/g) || []).length;
          revision.comments += count;
          revision.valid = true;
        } catch (e) {
          console.error(`_id: ${revision._id}, loadContributions err: ${e}, stack: ${e.stack}`);
        }
        return complete();
      } else return complete();
    });
  };

  fb_metrics('https://buzzfeed.com' + url).then((data) => {
    if (data.valid) {
      revision.comments += data.comments;
      revision.shares += data.shares;
    }

    return loadImpressions(loadContributions);
  });
};

let fetchRevision = function(article, then, fail) {
  let url = 'http://buzzfeed.com' + article.url;
  let attempts = 0;

  let attempt = () => {
    request({
      url: url,
      timeout: config.parsers.buzzfeed.fetchTimeout,
    }, function(err, res, body) {
      if (err) {
        // if there are no data from fb with shares, likes etc
        // attempt to make request again in some delay
        if (attempts < config.parsers.buzzfeed.fetchAttempts) {
          attempts++;
          return setTimeout(
            () => attempt(),
            config.parsers.buzzfeed.fetchDelay + Math.random() * config.parsers.buzzfeed.fetchDelayRandom
          );
        } else {
          console.error(`fetchIteration.request(${url}) failed, err: ${err}, stack: ${err.stack}`);
          return then({
            article: article,
            valid: false,
            raw: (body || '').toString().replace(/[\u0800-\uFFFF]+/g, '').replace(
              /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, '').replace(/[\xF0\x9F\x8F\xBD]/g, '')
          });
        }
      } else {
        console.log('Fetch revision --->'.blue, article.url);
        return then({
          article: article,
          valid: err || true,
          raw: (body || '').toString().replace(/[\u0800-\uFFFF]+/g, '').replace(
            /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, '').replace(/[\xF0\x9F\x8F\xBD]/g, '')
        });
      }
    });
  }

  attempt();
};

let parseArticle = function(data, revision, resolve, reject) {
  let _html = '';
  let $;
  let _article = data.article;
  if (revision) _html = revision.rawContent;
  if (_html) {
    let _title;
    let _content;
    let _authors;
    let _creationTime;
    let _category;
    let _tags;
    let _imageCount;
    let _videoCount;
    let _linkCount;
    let _keywords;
    let _top;
    try {
      $ = cheerio.load(_html);
      _title = $('#post-title').text();
      _category = $('.vertical-label').text();
      _content = getContent($('#buzz_sub_buzz'));
      _authors = $('.byline__author').text();
      _imageCount = $('#buzz_sub_buzz img').length;
      _videoCount = $('#buzz_sub_buzz .video-embed-area').length + $('#buzz_sub_buzz .fb-video').length;
      _linkCount = $('#buzz_sub_buzz a').length;
      _top = $('.trending-badge').length > 0;
      _keywords = $('meta[name="news_keywords"]').attr('content');
      // REVIEW: _time can be incorrect and its impossible to save it into db
      _time = new Date(
        (_html.match(/published: "\d\d\d\d\-\d\d\-\d\d \d\d\:\d\d\:\d\d"/gi) || [new Date().toString()])[
          0]
        .substring(12)
        .replace(/"/gi, '')
      );
      _tags = $('.tag.pub').map(function(i, el) {
        return $(this).text();
      }).get().join(', ');
    } catch (e) {
      console.error(`_id: ${revision._id}, parseStaticData err: ${e}, stack: ${e.stack}`);
    }
    _article.title = _title;
    _article.content = _content;
    _article.authors = _authors;
    _article.creationTime = _creationTime;
    _article.category = _category;
    _article.imageCount = _imageCount;
    _article.videoCount = _videoCount;
    _article.linkCount = _linkCount;
    _article.keywords = _keywords;
    _article.topPost = _top;
    _article.tags = _tags;

    _article.processed = true;
    console.log('Process article --->'.green, _title);
  }

  return resolve(_article);
};

var getContent = function($content) {
  var $ = cheerio.load($content.html());
  $('.print').remove();
  $('.sub_buzz_source_via').remove();
  $('.sub_buzz_grid_source_via').remove();
  $('.reuseble-id').remove();
  $('iframe').remove();
  $('script').remove();
  $('.instagram-media').remove();
  $('.bf-tweet').remove();
  return $.text().replace(/\s+/g, ' ');
};

module.exports = {
  parseRevision,
  parseArticle,
  fetchRevision
};
