var mongoose = require('mongoose');

let connect = function(config) {
  mongoose.Promise = Promise;
  mongoose.connect(config.connection);
  mongoose.connection.on('error', (err) => console.error('mongoose:error', err));
  mongoose.connection.on('all', (args) => console.log('mongoose:all'));
  mongoose.connection.on('connected', (args) => console.log('mongoose:connected'));
  mongoose.connection.on('connect', (args) => console.log('mongoose:connect'));

  return mongoose;
};

var articlesSchema = new mongoose.Schema({
  url: String,
  lastUpdated: Date,
  resource: String,
  processed: {
    type: Boolean,
    default: false
  },
  counter: {
    type: Number,
    default: 0
  },
  imageCount: {
    type: Number,
    default: 0
  },
  linkCount: {
    type: Number,
    default: 0
  },
  videoCount: {
    type: Number,
    default: 0
  },
  topPost: {
    type: Boolean,
    default: false
  },
  creationTime: Date,
  title: String,
  authors: String,
  category: String,
  tags: String,
  content: String
});

var revisionSchema = new mongoose.Schema({
  articleId: {
    type: 'ObjectId'
  },
  loadedAt: Date,
  rawContent: String,
  resource: String,
  processed: {
    type: Boolean,
    default: false
  },
  valid: {
    type: Boolean,
    default: true
  },
  likes: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
  },
  comments: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  shareableWith: String
});

var Articles = mongoose.model('articles', articlesSchema);
var Revisions = mongoose.model('revisions', revisionSchema);

module.exports = {
  Articles,
  Revisions,
  connect,
  IDBuilder: (id) => mongoose.Types.ObjectId(id),
}
