var express = require('express')
var mongoose = require('mongoose')

app = express()

port = process.env.PORT || 8080


Task = require('./api/models/todoListModel')
bodyParser = require('body-parser')


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Tododb', function(err){
    console.error('mongoose connect issue', err)
})


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/todoListRoutes')
routes(app)

app.listen(port)

console.log('todo list RESTful API server started on: ' + port)