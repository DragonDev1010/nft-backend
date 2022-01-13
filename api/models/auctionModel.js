'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AuctionSchema =  new Schema({
    nftId: Number,
    currency: String, 
    auctionPrice: Number,
    startTime: Date,
    endTime: Date,
    creator: String,
    created: Date
})

module.exports = mongoose.model('Auctions', AuctionSchema)