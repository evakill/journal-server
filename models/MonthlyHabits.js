var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MonthlyHabitsSchema = new Schema ({
  month: {
    type: Date,
    required: true,
  },
  habitLabels: [{
    type: String,
    required: true,
  }],
  habitData: [{
    type: Schema.ObjectId,
    ref: 'Habit',
    required: true,
  }]
})

module.exports = mongoose.model('MonthlyHabits', MonthlyHabitsSchema)
