'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    dateOfBirth : {
        type: String,
        required: true
    }, 
    isDeleted : {
        type: Boolean,
        required: true
    },
    isAdmin : {
        type: Boolean,
        required: true
    } 

   })
module.exports = mongoose.model('profile', UserSchema);
