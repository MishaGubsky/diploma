let knex;

let connect = function(config) {
  knex = require('knex')({
    client: 'mysql',
    connection: config.connection
  });

  return knex;
};

let buildSchema = (name) => {
  return class Model {
    constructor(fields, filter, limit, order) {
      this.name = name;
      this.fields = Object.assign({}, fields);
      this.filter = typeof filter === 'string' ? filter : Object.assign({}, filter);
      this._limit = limit;
      this._order = order;
    }

    save() {
      if (this.fields._id) {
        return knex(this.name)
          .where({
            _id: this.fields._id,
          })
          // .debug()
          .update(this.fields);
      } else {
        return knex(this.name)
          // .debug()
          .insert(this.fields);
      }
    }

    // TODO: metaprogramming or dynamic setters/getters?
    get _id() {
      return this.fields._id;
    }

    set _id(v) {
      return this.fields._id = v;
    }

    get url() {
      return this.fields.url;
    }
    set url(v) {
      return this.fields.url = v;
    }

    get rawContent() {
      return this.fields.rawContent;
    }
    set rawContent(v) {
      return this.fields.rawContent = v;
    }

    get resource() {
      return this.fields.resource;
    }
    set resource(v) {
      return this.fields.resource = v;
    }

    get articleId() {
      return this.fields.articleId;
    }
    set articleId(v) {
      return this.fields.articleId = v;
    }

    get processed() {
      return this.fields.processed;
    }
    set processed(v) {
      return this.fields.processed = v;
    }

    get valid() {
      return this.fields.valid;
    }
    set valid(v) {
      return this.fields.valid = v;
    }

    get shareableWith() {
      return this.fields.shareableWith;
    }
    set shareableWith(v) {
      return this.fields.shareableWith = v;
    }

    get views() {
      return this.fields.views;
    }
    set views(v) {
      return this.fields.views = v;
    }

    get title() {
      return this.fields.title;
    }
    set title(v) {
      return this.fields.title = v;
    }

    get content() {
      return this.fields.content;
    }
    set content(v) {
      return this.fields.content = v;
    }

    get counter() {
      return this.fields.counter;
    }
    set counter(v) {
      return this.fields.counter = v;
    }
    get tags() {
      return this.fields.tags;
    }
    set tags(v) {
      return this.fields.tags = v;
    }
    get linkCount() {
      return this.fields.linkCount;
    }
    set linkCount(v) {
      return this.fields.linkCount = v;
    }

    get topPost() {
      return this.fields.topPost;
    }
    set topPost(v) {
      return this.fields.topPost = v;
    }

    get authors() {
      return this.fields.authors;
    }
    set authors(v) {
      return this.fields.authors = v;
    }

    get creationTime() {
      return this.fields.creationTime;
    }
    set creationTime(v) {
      return this.fields.creationTime = v;
    }

    get category() {
      return this.fields.category;
    }
    set category(v) {
      return this.fields.category = v;
    }

    get category() {
      return this.fields.category;
    }
    set category(v) {
      return this.fields.category = v;
    }
    get imageCount() {
      return this.fields.imageCount;
    }
    set imageCount(v) {
      return this.fields.imageCount = v;
    }
    get videoCount() {
      return this.fields.videoCount;
    }
    set videoCount(v) {
      return this.fields.videoCount = v;
    }
    get keywords() {
      return this.fields.keywords;
    }
    set keywords(v) {
      return this.fields.keywords = v;
    }

    get likes() {
      return this.fields.likes;
    }
    set likes(v) {
      return this.fields.likes = v;
    }

    get comments() {
      return this.fields.comments;
    }
    set comments(v) {
      return this.fields.comments = v;
    }

    get shares() {
      return this.fields.shares;
    }
    set shares(v) {
      return this.fields.shares = v;
    }

    get lastUpdated() {
      return this.fields.lastUpdated;
    }
    set lastUpdated(v) {
      return this.fields.lastUpdated = v;
    }

    get views() {
      return this.fields.views;
    }
    set views(v) {
      return this.fields.views = v;
    }

    limit(count) {
      this._limit = count;
      return this;
    }

    order(_order) {
      this._order = _order;
      return this;
    }

    exec(callback) {
      let chain = knex(name);

      if (typeof this.filter === 'string') chain = chain.whereRaw((this.filter || '').toString());
      else chain = chain.where(this.filter || {});

      if (this._limit) chain = chain.limit(this._limit);
      if (this._order) chain = chain.orderBy(this._order, 'asc');

      return chain.select('*')
        // .debug()
        .then(arr => {
          return callback(null, arr.map(item => new Model(item)));
        })
        .catch(err => callback(err, []));
    }

    static find(filter) {
      let model = new Model({}, filter || {});
      return model;
    }

    static findOne(filter, callback) {
      return new Promise((resolve, reject) => {
        Model.find(filter).limit(1).exec(function(err, res) {
          if (err) return reject(err);
          if (!res || !res.length) return reject(Promise.reject('cant find anything'));
          return resolve(res[0]);
        });
      });
    }
  };
};

module.exports = {
  Articles: buildSchema('articles'),
  Revisions: buildSchema('revisions'),
  connect: connect,
  IDBuilder: (id) => +id,
};
