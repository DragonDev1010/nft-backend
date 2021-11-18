'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    walletAddress: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    avatar: {
        data: Buffer,
        contentType: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Users', UserSchema)