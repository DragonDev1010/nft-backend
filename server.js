require('dotenv').config({ path: '.env' })
require('events').EventEmitter.defaultMaxListeners = 15;
var express = require('express')
var mongoose = require('mongoose')
var cors = require("cors");
bodyParser = require('body-parser')
const expFileUpload = require('express-fileupload')

port = process.env.PORT || 8000

app = express()
app.use(cors());
app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true 
}));
  
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(expFileUpload())

mongoose.Promise = global.Promise
console.log('test: ', process.env.DATABASE)
mongoose.connect(process.env.DATABASE, function(err){
    console.error('mongoose connect issue', err)
})

// Nft Table
Nft = require('./api/models/nftListModel')
var nftRoutes = require('./api/routes/nftListRoutes')
nftRoutes(app)

// Collection Table
Collection = require('./api/models/collectionListModel')
var collectionRoutes = require('./api/routes/collectionListRoutes')
collectionRoutes(app)

// User Table
User = require('./api/models/userListModel')
var userRoutes = require('./api/routes/userListRoutes')
userRoutes(app)

// Auction Table
Auction = require('./api/models/auctionModel')
var auctionRoutes = require('./api/routes/auctionRoutes')
auctionRoutes(app)

// Sale Table
Sale = require('./api/models/saleModel')
var saleRoutes = require('./api/routes/saleRoutes')
saleRoutes(app)

app.listen(port)

console.log('RESTful API server started on: ' + port)
