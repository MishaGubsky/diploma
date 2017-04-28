module.exports = {
  // for MongoDB
  // database: {
  //   driver: 'mongo'
  //   connection: 'mongodb://localhost:27017/abc123'
  // },
  // for MySQL
  database: {
    driver: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'ml-data-scrapper-test'
    }
  },
  // size of batches for processing by one iteration
  batches: {
    revisions: 200,
    articles: 100,
    fetches: 100
  },
  // delta between completing process of revisions and fetching new ones
  // in milliseconds
  revisionsUpdateDelta: 1000 * 60 * 30,
  // how often to check for the new articles we need to load
  revisionsPauseDelta: 1000 * 10,
  cron: '*/5 * * * * *',
  // relevant path to /parsers/lib/proxies.js file
  // proxies: './../proxies.txt',
  // or absolute:
  proxies: __dirname + '/proxies.txt',
  proxyEnabled: false,
  iterations: {
    iterateRevisions: true,
    iterateArticles: true
  },
  parsers: {
    buzzfeed: {
      disabled: {
        likes: true,
        shares: true,
        views: true,
        comments: false
      },
      fetchAttempts: 10,
      fetchTimeout: 60 * 1000,
      fetchDelay: 1000 * 30,
      fetchDelayRandom: 1000 * 10,
    }
  },
  modules: {
    facebook_metrics: {
      disabled: false,
      attempts: 20,
      timeout: 1000 * 15,
      delayBetweenAttempts: 1000 * 30,
      delayRandom: 1000 * 10,
    }
  }
};
