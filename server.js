var express = require('express')
var mongoose = require('mongoose')
var cors = require("cors");

app = express()
port = process.env.PORT || 8080

bodyParser = require('body-parser')
// Task = require('./api/models/todoListModel')
User = require('./api/models/userListModel')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/SpaceNFT', function(err){
    console.error('mongoose connect issue', err)
})

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// var routes = require('./api/routes/todoListRoutes')
var routes = require('./api/routes/userListRoutes')
routes(app)

app.listen(port)

console.log('todo list RESTful API server started on: ' + port)