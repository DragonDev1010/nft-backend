'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NFTSchema = new Schema({
    collection_id: Number,
    name: String,
    nft_id: Number,
    description: String,
    price: Number,
    creator_id: Number,
    owner: Number
}, {collection: 'nft'})

module.exports = mongoose.model('nft', NFTSchema)