'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name: {
        type: String,
        required: 'Required'
    },
    email: {
        type: String,
        required: 'Required'
    },
    password: {
        type: String,
        required: 'Required'
    },
    Created_date: {
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

module.exports = mongoose.model('Users', UserSchema)