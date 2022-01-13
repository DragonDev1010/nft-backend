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
    created: Date,
    highestBid: Number,
    bidder: String
})

module.exports = mongoose.model('Auctions', AuctionSchema)