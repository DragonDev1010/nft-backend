'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    userId: {
        type: Number
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    
    firstName: String,
    lastName: String,
    facebook: String,
    twitter: String,
    instagram: String,
    tele: String,

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
    collectedNftIds: [Number],
    favNftIds: [Number],
    Created_date: {
        type: Date,
        default: Date.now
    },
    bgImg: { data: Buffer, contentType: String},
    userImg: { data: Buffer, contentType: String}
})

module.exports = mongoose.model('Users', UserSchema)