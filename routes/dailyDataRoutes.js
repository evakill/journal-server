var DailyData = require('../models/DailyData.js')

module.exports = app => {

  app.post('/day/new', (req, res) => {
    var data = new DailyData({
      date: req.body.date,
      happiness: req.body.happiness,
      productivity: req.body.productivity,
      love: req.body.love,
      timeSleep: req.body.timeSleep,
      timeWake: req.body.timeWake,
      memory: req.body.memory,
      photo: req.body.photo,
      gratitude: req.body.gratitude,
      mantra: req.body.mantra,
      compliment: req.body.compliment,
      timeSubmit: new Date(),
    })
    data.save((err, res) => {
      if (err) console.log('Error saving day', err)
      else console.log('Day saved')
    })
  })

  app.get('/day/:date', (req, res) => {
    var date = new Date(req.params.date)
    DailyData.findOne({date: date}, (err, day) => {
      if (err) console.log('Error finding day')
      else {
        console.log('Day: ', day)
        res.send({day: day})
      }
    })
  })

}
