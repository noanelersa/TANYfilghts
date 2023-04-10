const Flight = require('../modeles/flights');
const mongoose = require("mongoose");
//create delete update getAll getSpecific
const createFlight = async(airlineName,flightTime,landTime,source,destination)=>{
    const flight = new Flight({
        airlineName:airlineName,
        source:source,
        destination:destination
    });
    if(flightTime){
        flight.flightTime=flightTime;
    }
    if(landTime){
        flight.landTime=landTime;
    }
    return await Flight.save();
};

const getFlightById = async(id)=>{
    if(mongoose.Types.ObjectId.isValid(id)){
        return await Flight.findById(id);
    }
    return null;
};

const deleteFlight = async(id)=>{
    const flight=getFlightById(id);
    if(!flight)
        return null;
    return (await flight).deleteOne(flight);
};

const getFlights = async ()=>{
    return await Flight.find({});
};

const update = async(airlineName,flightTime,landTime,source,destination,id)=>{
    const flight=getFlightById(id);
    if(!flight){return null;}
    flight.airlineName=airlineName;
    flight.flightTime=flightTime;
    flight.landTime=landTime;
    flight.source=source;
    flight.destination=destination;
    return await Flight.save();
};

module.exports={
    createFlight,
    getFlightById,
    deleteFlight,
    getFlights,
    update
};