'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SaleSchema =  new Schema({
    nftId: Number,
    currency: String, 
    salePrice: Number,
    startTime: Date,
    endTime: Date,
    creator: String,
    created: Date
})

module.exports = mongoose.model('Sales', SaleSchema)