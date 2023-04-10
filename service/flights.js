const Flight = require('../modeles/flights');
const mongoose = require("mongoose");
//create delete update getAll getSpecific
const createFlight = async(airlineName,flightTime,landTime,source,destination)=>{
    if(Flight.find({airlineName:airlineName, landTime: landTime, source:source ,flightTime:flightTime, destination: destination})._id){return null;}
    const flight = new Flight({
        airlineName:airlineName,
        source:source,
        destination:destination,
        flightTime: flightTime,
        landTime: landTime
    });
    return await flight.save();
};

const getFlightById = async(id)=>{
    if(mongoose.Types.ObjectId.isValid(id)){
        const flight = await Flight.findById(id);
        if(flight){
            return flight;
        }
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
    const flight= await getFlightById(id);
    if(!flight){return null;}
    flight.airlineName=airlineName;
    flight.flightTime=flightTime;
    flight.landTime=landTime;
    flight.source=source;
    flight.destination=destination;
    return await flight.save();
};

module.exports={
    createFlight,
    getFlightById,
    deleteFlight,
    getFlights,
    update
};