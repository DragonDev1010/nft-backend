var express = require('express')
var mongoose = require('mongoose')
var cors = require("cors");
const expFileUpload = require('express-fileupload')

app = express()
port = process.env.PORT || 8000

bodyParser = require('body-parser')
// Task = require('./api/models/NFtListModel')
User = require('./api/models/userListModel')
NFT = require('./api/models/nftListModel')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/SpaceNFT', function(err){
    console.error('mongoose connect issue', err)
})

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(expFileUpload())

// var routes = require('./api/routes/NftListRoutes')
var userRoutes = require('./api/routes/userListRoutes')
userRoutes(app)
var nftRoutes = require('./api/routes/NftListRoutes')
nftRoutes(app)

app.listen(port)

console.log('RESTful API server started on: ' + port)