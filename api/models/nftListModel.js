'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NFTSchema = new Schema({
    nft_id: Number,

    name: String,
    description: String,
    cntCopies: Number,
    category: String,
    royalty: Number,
    saleOptions: Number,
    creatorAddr: String,
    ownerAddr: String,

    hash: String,
    imgURL: String,

    price: Number,
    forSale: Boolean,

    favUserIds: [Number],

    img: { data: Buffer, contentType: String}
}, {collection: 'nft'})

module.exports = mongoose.model('nft', NFTSchema)