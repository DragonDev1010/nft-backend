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
    created: Date,

    hash: String,
    imgURL: String,

    currency: String, // {eth, sge}
    price: Number,
    state: String, // {sale, auction, none}

    favUsers: [String],

    img: { data: Buffer, contentType: String}
}, {collection: 'nft'})

module.exports = mongoose.model('nft', NFTSchema)