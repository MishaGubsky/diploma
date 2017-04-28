var request = require("request");
var cheerio = require("cheerio");
var fb_metrics = require('./../lib/facebook_metrics');

const comments = (url) =>
  `https://www.nytimes.com/svc/community/V3/requestHandler?url=${encodeURIComponent('https://www.nytimes.com' + url)}`;

let parseRevision = function(data) {
  return new Promise((resolve, reject) => {
    data.article.then(function(article) {
      let revision = data.revision;
      let url = article.url;
      let commentsRequestUrl = comments(url);

      revision.shares = 0;
      revision.comments = 0;
      revision.shareableWith = 'facebook;email;twitter;bookmark;direct-link';

      let loadComments = function() {
        request(commentsRequestUrl, function(error, response, body) {
          if (!error) {
            try {
              let json = JSON.parse(body);
              let comments = json.results.totalCommentsFound || 0;
              revision.comments += comments;
            } catch (e) {
              console.error(e);
            }
            return resolve(revision);
          } else return resolve(revision);
        });
      };

      fb_metrics('https://www.nytimes.com' + url).then((data) => {
        if (data.valid) {
          revision.comments += data.comments;
          revision.shares += data.shares;
        }

        return loadComments();
      });

    }).catch(err => {
      console.error(err);
      return resolve(data.revision);
    });
  });
};

let fetchRevision = function(article) {
  return new Promise((then, fail) => {
    let url = 'http://www.nytimes.com' + article.url;
    return request({
      url: url,
      timeout: 7500,
      forever: true,
      pool: {
        maxSockets: 5000
      }
    }, function(err, res, body) {
      if (err) console.error(`fetchIteration.request(${url}) failed, err: ${err}, stack: ${err.stack}`);
      return then({
        article: article,
        raw: (body || '').toString().replace(/[\u0800-\uFFFF]/g, '')
      });
    });
  });
};

let parseArticle = function(data) {
  return new Promise((resolve, reject) => {
    data.revision.then(function(revision) {
      let _html;
      let $;
      let _article = data.article;
      if (revision) {
        _html = revision.rawContent;
      }
      if (_html) {
        let _title;
        let _content;
        let _authors;
        let _creationTime;
        let _category;
        let _imageCount;
        let _videoCount;
        let _keywords;
        $ = cheerio.load(_html);
        _title = $('#headline').text();
        $('.story-body-supplemental').find('footer').remove();
        $('.story-body-supplemental').find('button').remove();
        _content = $('.story-body-supplemental').text();
        _authors = $('.byline-author').text();
        _imageCount = $('img').length;
        _videoCount = $('.video-embed-area').length;
        _keywords = $('meta[name="news_keywords"]').attr('content');
        _creationTime = new Date($('.dateline').attr('datetime'));
        _article.title = _title;
        _article.content = getContent(_content);
        _article.authors = _authors;
        _article.creationTime = _creationTime;
        _article.imageCount = _imageCount;
        _article.videoCount = _videoCount;
        _article.keywords = _keywords;
        console.log(_title);
      }

      resolve(_article);
    }).catch(err => console.error(err));
  });
};

var getContent = function($content) {
  return $content.replace(/\s+/g, ' ').replace(/["'’“”]/g, '');
};

module.exports = {
  parseRevision,
  parseArticle,
  fetchRevision
};
