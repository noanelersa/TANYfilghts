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
        default:Date.now()
    },
    landTime:{
        type:Date,
        default:Date.now()+(60*60*1000)
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
