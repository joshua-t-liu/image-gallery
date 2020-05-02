const mongoose = require('mongoose');

const { formatOpenTime } = require('./helper.js');

const { MONTHS, TAGS } = require('./constants.js');

const root = 'https://loremflickr.com/320/240';

mongoose.connect('mongodb://localhost:27017/trulia');

const schemaId = new mongoose.Schema({
  _id: {
    type: Number,
    default: 0,
  },
  sequence: {
    type: Number,
    default: 1,
  },
});

const HomeId = mongoose.model('homeId', schemaId, 'homes');

const schema = new mongoose.Schema({
  _id: Number,
  address: String,
  beds: Number,
  baths: Number,
  price: Number,
  tags: [{
    type: String,
    enum: TAGS,
  }],
  dateSold: Date,
  openStart: Date,
  openEnd: Date,
  images: [String],
});

schema.path('price').get((v) => `$${String(v).replace(/(\d)(?=(\d{3})+$)/g, '$&,')}`);

schema.path('dateSold').get((v) => (v ? `${MONTHS[v.getMonth()]} ${v.getDate()},${v.getFullYear()}` : v));

schema.virtual('imageURLs').get(function urls() {
  return this.images.map((img) => `${root}/${img}`);
});

schema.virtual('rooms').get(function rooms() {
  return `${this.beds} bed${this.beds > 1 ? 's' : ''} ${this.baths} bath${this.baths > 1 ? 's' : ''}`;
});

schema.virtual('tagsProcessed').get(function processTags() {
  return this.tags.map((tag) => ((tag === 'OPEN') ? `OPEN ${formatOpenTime(this.openStart, this.openEnd)}` : tag));
});

schema.pre('save', function getId(next) {
  const update = { $inc: { sequence: 1 } };
  const options = { new: true, upsert: true };
  HomeId.findByIdAndUpdate(0, update, options, (err, counter) => {
    if (err) throw err;
    this.set('_id', counter.get('sequence'));
    next();
  });
});

const Home = mongoose.model('homes', schema, 'homes');

const get = (homeId, cb) => {
  Home.findById(homeId, (err, home) => {
    const json = (home) ? home.toObject({ getters: true }) : null;
    cb(err, json);
  });
};

module.exports.model = Home;
module.exports.get = get;
