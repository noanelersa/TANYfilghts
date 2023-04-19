const Flight = require('../models/flights');
const mongoose = require("mongoose");
//create delete update getAll getSpecific
const createFlight = async(airlineName,flightTime,landTime,source,destination,price)=>{
    if(Flight.find({airlineName:airlineName, landTime: landTime, source:source ,flightTime:flightTime, destination: destination,price:price})._id){return null;}
    flightTime = flightTime + ":00.000Z";
    landTime = landTime + ":00.00Z";
    const flight = new Flight({
        airlineName:airlineName,
        source:source,
        destination:destination,
        flightTime: flightTime,
        landTime: landTime,
        price:price,
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
    const flight=await getFlightById(id);
    if(!flight)
        return null;
    return await Flight.deleteOne(flight);
};

const getFlights = async ()=>{
    return await Flight.find({});
};

const update = async(airlineName,flightTime,landTime,source,destination,price,id)=>{
    const flight= await getFlightById(id);
    if(!flight){return null;}
    flightTime = flightTime + ":00.000Z";
    landTime = landTime + ":00.00Z";
    flight.airlineName=airlineName;
    flight.flightTime=flightTime;
    flight.landTime=landTime;
    flight.source=source;
    flight.destination=destination;
    flight.price=price;
    return await flight.save();
};

const getFlightsByAirline = async (airlineName) =>{
    return await Flight.find({source: airlineName});
}

const changeAllFlight = async (oldAirport,newAirport) =>{
    const flightsSource = await Flight.find({source: oldAirport})
    const flightsDestination = await Flight.find({destination: oldAirport})
    await flightsSource.forEach(function async (e) {
        e.source = newAirport;
        e.save();
    });
    await flightsDestination.forEach(function async (e) {
        e.destination = newAirport;
        e.save();
    });
}

const searchSpesicFlight = async(flightTime, landTime, source, destination)=>{
    flightTime = flightTime + "T00:00:00.000Z";
    landTime = landTime + "T23:59:59.000Z";
    return await (Flight.find({
        source: source,
        destination: destination,
        flightTime: {$gt: flightTime},
        landTime: {$lt: landTime}
    }));
};

const searchMoreSpecificFlight=async (flightTime, landTime, source, destination,priceMin,priceMax,airlineName)=>{
    flightTime = flightTime + "T00:00:00.000Z";
    landTime = landTime + "T23:59:59.000Z";
    return await (Flight.find({
        source: source,
        destination: destination,
        flightTime: {$gt: flightTime},
        landTime: {$lt: landTime},
        price:{$gt:priceMin},
        price:{$lt:priceMax},
        airlineName:airlineName
    }));
}

const getPopularDes = async () =>{
    return await Flight.aggregate( [
        {
            $group: {
                _id: {destination: "$destination"},
                count: { $count: { } }
            }
        }
    ] )
}

module.exports={
    createFlight,
    getFlightById,
    deleteFlight,
    getFlights,
    update,
    searchSpesicFlight,
    getPopularDes,
    searchMoreSpecificFlight,
    getFlightsByAirline,
    changeAllFlight
};