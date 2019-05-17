const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var Photo = require('./models/NotificationData.js').photo
var Mantra = require('./models/NotificationData.js').mantra
var Gratitude = require('./models/NotificationData.js').gratitude
var Compliment = require('./models/NotificationData.js').compliment
var DailyData = require('./models/DailyData.js')
var MonthlyHabits = require('./models/MonthlyHabits.js')
var Habit = require('./models/Habit.js')

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

require('./routes/dailyDataRoutes.js')(app);
require('./routes/notificationRoutes.js')(app);
require('./routes/habitRoutes.js')(app);

app.listen(process.env.PORT || 3000);
