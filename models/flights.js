const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//flights: time , name of the airline , s&d,date
const flight=new Schema({
    airlineName:{
        type:String,
        required:true
    },
    flightTime:{
        type:Date,
        required:true
    },
    landTime:{
        type:Date,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Flight', flight);
