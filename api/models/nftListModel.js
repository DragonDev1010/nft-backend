'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NFTSchema = new Schema({
    nft_id: Number,
    name: String,
    description: String,
    price: Number,
    collects: {
        id: Number,
        name: String
    },
    creator: {
        id: Number,
        name: String,
        email: String
    },
    owner: {
        id: Number,
        name: String,
        email: String
    },
    category: String,
    status: String,
    hash: String,
    artType: String
}, {collection: 'nft'})

module.exports = mongoose.model('nft', NFTSchema)