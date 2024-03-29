const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const client = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    emailAddress:{
        type: String,
        required: true //+@@
    }



// continue....
});
module.exports = mongoose.model('Client', client);