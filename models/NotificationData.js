var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataSchema = new Schema ({
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  timeSubmit: {
    type: Date,
    required: true,
  }
})

module.exports = {
  photo: mongoose.model('Photo', DataSchema),
  gratitude: mongoose.model('Gratitude', DataSchema),
  matra: mongoose.model('Mantra', DataSchema),
  compliment: mongoose.model('Compliment', DataSchema),
}
