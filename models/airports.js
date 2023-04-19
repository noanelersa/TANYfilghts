const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airport = new Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    published:{
        type: Date,
        default: Date.now()
    },
    owner:{
        type: String,
        required: true
    },
    numOfTerminals:{
        type: Number,
        default: 1
    },
    password:{
        type: String,
        required: true
    }


// continue....
})
module.exports = mongoose.model('Airport', airport);