/**
 * GNITO API
 *
 * Author: jcahal
 * Version: 0.0.5
 */

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/gnito'
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log(`Connected to ${mongoUrl}`)
})

const Drop = mongoose.model('Drop', new mongoose.Schema({
  message:  String,
  password: String,
  title:    String,
}))

app.listen(port)

app.get('/', (req, res) => {
  res.send('Hello from the Server!')
})

app.route('/api/')
  .get((req, res) => {
    res.json({ name: 'gnito-api', version: '0.0.5' })
  })
  .post(jsonParser, (req, res) => {
    Drop.create(req.body, (err, drop) => {
      if (err) return res.status(500).json({ error: 'Failed to create drop' })
      res.json(drop)
    })
  })

app.route('/api/:drop')
  .get((req, res) => {
    Drop.findOneAndRemove({ _id: req.params.drop, password: req.query.pwd }, (err, drop) => {
      if (err || !drop) return res.status(404).json({ error: 'Drop not found or incorrect password' })
      res.json(drop)
    })
  })
