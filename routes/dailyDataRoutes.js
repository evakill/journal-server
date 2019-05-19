var DailyData = require('../models/DailyData.js')

module.exports = app => {

  app.post('/day/new', (req, res) => {
    console.log(req.body)
    var data = new DailyData({
      date: req.body.date,
      happiness: req.body.happiness,
      productivity: req.body.productivity,
      love: req.body.love,
      timeSleep: req.body.timeSleep,
      timeWake: req.body.timeWake,
      memory: req.body.memory,
      timeSubmit: new Date(),

      photo: req.body.photo,
      gratitude: req.body.gratitude,
      mantra: req.body.mantra,
      compliment: req.body.compliment,
    })
    data.save((err, res) => {
      if (err) console.log('Error saving day', err)
      else console.log('Day saved')
    })
  })

  app.get('/day/:date', (req, res) => {
    DailyData.findOne({date: req.params.date}, (err, day) => {
      if (err) console.log('Error finding day')
      else if (day) {
        console.log('Day: ', day)
        res.send({
          memory: day.memory,
          love: day.love,
          productivity: day.productivity,
          happiness: day.happiness,
          timeSleep: day.timeSleep,
          timeWake: day.timeWake,
          timeSubmit: day.timeSubmit,
          date: day.date
        })
      }
      else res.error("Date not found")
    })
  })

}
