let modulesCollection = require('./modulesCollection');

let _getModule = function(_resourse) {
  let _module = modulesCollection.getModule(_resourse);
  return _module;
};

let parseRevision = function(data) {
  let _module = _getModule(data.revision.resource);
  return new Promise(function(resolve, reject) {
    return data.article.then(function(article) {
      return _module.parseRevision(data, article, resolve, reject);
    }).catch(err => {
      console.error(`_id: ${data.revision._id}, parseRevision err: ${err}, stack: ${err.stack}`);
      return resolve(data.revision);
    });
  });
  return _module.parseRevision(data);
};

let parseArticle = function(data) {
  let _module = _getModule(data.article.resource);
  return new Promise(function(resolve, reject) {
    return data.revision.then(function(revision) {
      return _module.parseArticle(data, revision, resolve, reject);
    }).catch(err => {
      console.error(`_id: ${data.article._id}, parseArticle err: ${err}, stack: ${err.stack}`);
      return resolve(data.article);
    });
  });
};

let fetchRevision = function(data) {
  let _module = _getModule(data.resource);
  return new Promise((then, fail) => _module.fetchRevision(data, then, fail));
};

module.exports = {
  parseRevision,
  parseArticle,
  fetchRevision
};
