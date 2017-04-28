let request = require("request");
let proxies = require('./proxies');
let config = require('./../config');

let token =
  'EAANLavLmmBIBABZCXbZCZATcdt1VSGMjJhBcRXBZAnrwKiTjCazv9FVCpH7ZB6lrbdNvFonBPGZBAZCQvTl4dSF8HC0k0FUDe1BZCODZCOXZBymEjTj9za8XKGqjmPyE7BSkDLmFzvQd3gf4nuAPClGkZAC1GVN9CkZCrh7K6kEfq2SvkQZDZD';
let api_url = (link) =>
  `https://graph.facebook.com/?id=${encodeURIComponent(link)}&access_token=${token}`;

let get_token = function() {
  return new Promise((then, fail) => {
    let url =
      `https://graph.facebook.com/oauth/access_token?client_id=927347643947026&client_secret=aac383b6acd5e0ddeca31749d2cb1232&grant_type=fb_exchange_token&fb_exchange_token=${token}`;
    let opts = {
      url: url,
      method: 'get',
      timeout: config.modules.facebook_metrics.timeout,
      proxy: proxies.getProxy(),
    }
    return request(opts, function(err, res, body) {
      if (err) {
        console.error(`facebook.get_token err: ${err}, body: ${body}`.red);
        return then();
      }
      try {
        let _token = body.split('&')[0].split('=')[1];
        token = _token;
      } catch (e) {
        console.error(`facebook.get_token err: ${e}, body: ${body}`.red);
      }
    });
  });
};

let refresh = function(url) {
  return new Promise((then, fail) => {
    let opts = {
      url: api_url(url) + '&scrape=true',
      method: 'POST',
      timeout: config.modules.facebook_metrics.timeout,
      // forever: true,
      proxy: proxies.getProxy(),
      // pool: {
      //   maxSockets: 5000
      // }
    };
    return request(opts, function(err, res, body) {
      if (err) console.error(`facebook.forceRefresh err: ${err}, body: ${body}`.red);
      // force refreshing graph object in fb
      return then();
    });
  });
};

let metrics = function(url) {
  if (config.modules.facebook_metrics.disabled) {
    return Promise.resolve({
      shares: 0,
      comments: 0,
      valid: true
    });
  }

  return refresh(url).then(() => {
    return new Promise((then, fail) => {
      let attempts = 0;
      let attempt = () => {
        let opts = {
          url: api_url(url),
          timeout: config.modules.facebook_metrics.timeout,
          // forever: true,
          proxy: proxies.getProxy(),
          // pool: {
          //   maxSockets: 5000
          // }
        };
        request(opts, function(error, res, body) {
          if (error) console.error(`facebook.fetch err: ${error}`.red);
          if (!error) {
            let result = {
              shares: 0,
              comments: 0,
              valid: false
            };
            try {
              let json = JSON.parse(body);

              if (json && json.share) {
                result.shares = json.share.share_count || 0;
                result.comments = json.share.comment_count || 0;
                result.valid = true;
              } else {
                console.error(`facebook.fetch json error, json: ${body}`.red);
                // if there are no data from fb with shares, likes etc
                // attempt to make request again in some delay
                if (attempts < config.modules.facebook_metrics.attempts) {
                  attempts++;
                  let fun = () => attempt();
                  if (json.error && json.error.code && json.error.code === 190) fun = () => get_token()
                    .then(() => attempt());

                  return setTimeout(
                    fun,
                    config.modules.facebook_metrics.delayBetweenAttempts + Math.random() * config.modules
                    .facebook_metrics.delayRandom
                  );
                } else return then(result);
              }
            } catch (e) {
              console.error(`facebook.fetch parse err: ${error}, json: ${body}`.red);
            }
            return then(result);
          } else return then({
            shares: 0,
            comments: 0,
            valid: false
          });
        });
      };

      return attempt();
    });
  });
};

module.exports = metrics;
