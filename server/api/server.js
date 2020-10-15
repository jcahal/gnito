/**
 * GNITO API
 * 
 * Author: jcahal
 * Version: 0.0.1
 * 
 * TODO: 
 *  Fix delete after retrieve
 *  Comment tf out of this file
 * 
 */

const express = require('express');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const { version } = require('os');
const { json } = require('body-parser');
const app = express()
const port = 3000

// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// DB Connection
const DBA = process.env.DB_ADDRESS || 'cluster0.faqgv.mongodb.net';
const DBP = process.env.DB_PORT || '27017';
const PR = process.env.DB_PROTOCOL || 'mongodb+srv';
const DB = process.env.DB_NAME || 'gnito';
const UN = process.env.DB_USERNAME || 'gnito-client';
const PW = process.env.DB_PASSWORD || 'E3oKn3I8CInd';
mongoose.connect(`${PR}://${UN}:${PW}@${DBA}:${DBP}/${DB}`);

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log(`Connected to mongodb://${UN}:${PW}@${DBA}:27017/${DB}`)
})

const Schema = mongoose.Schema
const Model = mongoose.model

const dropSchema = new mongoose.Schema({
  message: String,
  password: String,
  title: String,
})

const Drop = Model('Drop', dropSchema)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello from the Server!')
})

app.route('/api/')
  .get((req, res) => {
    res.json({
      name: 'gnito-api',
      version: '0.0.2'
    })
  })
  .post(jsonParser, (req, res) => {
    Drop.create(req.body, (err, drop) => {
      res.json(drop)
    })
  })

// TODO: figure out how to get with special characters in password
app.route('/api/:drop')
  .get( (req, res) => {
    Drop.find({ _id: req.params.drop, password: `${req.query.pwd}` }, (err, drop) => {
      res.json(drop)
    })
    Drop.findOneAndDelete({ _id: req.params.drop}) // TODO: fix this
  })