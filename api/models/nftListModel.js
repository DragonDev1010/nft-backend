'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NFTSchema = new Schema({
    nft_id: Number,
    name: String,
    description: String,
    price: Number,
    nftCollection: {
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
    }
}, {collection: 'nft'})

module.exports = mongoose.model('nft', NFTSchema)