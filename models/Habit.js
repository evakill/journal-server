var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HabitSchema = new Schema ({
  label: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
})

module.exports = mongoose.model('Habit', HabitSchema)
