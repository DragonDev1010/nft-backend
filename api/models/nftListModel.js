'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NFTSchema = new Schema({
    name: {
        type: String,
        required: 'Required'
    },
    hash: {
        type: String,
        required: 'Required'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
})

module.exports = mongoose.model('NFTs', NFTSchema)