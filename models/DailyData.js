var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DailyDataSchema = new Schema ({
  date: {
    type: Date,
    required: true,
  },
  timeSubmit: {
    type: Date,
    required: true,
  },
  happiness: {
    type: Number,
    required: true,
  },
  productivity: {
    type: Number,
    required: true,
  },
  love: {
    type: Number,
    required: true,
  },
  timeSleep: {
    type: Date,
    required: true,
  },
  timeWake: {
    type: Date,
    required: true,
  },
  memory: {
    type: String,
    required: true,
  },
  photo: {
    type: Schema.ObjectId,
    ref: 'Photo',
    required: true,
  },
  gratitude: {
    type: Schema.ObjectId,
    ref: 'Gratitude',
    required: true,
  },
  mantra: {
    type: Schema.ObjectId,
    ref: 'Mantra',
    required: false,
  },
  compliment: {
    type: Schema.ObjectId,
    ref: 'Compliment',
    required: false,
  },
})

module.exports = mongoose.model('DailyData', DailyDataSchema);
