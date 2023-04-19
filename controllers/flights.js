
const flightService = require('../service/flights');
//airlineName,flightTime,landTime,source,destination
const createFlight=async (req,res)=>{
    try {
        const flight = await flightService.createFlight(req.body.airlineName, req.body.flightTime, req.body.landTime, req.body.source, req.body.destination, req.body.price);
        if (!flight) {
            return res.status(404).json({errors: ['can`t create flight']})
        }
        return res.json(flight);
    }
    catch (e){
        return null;
    }
};

const deleteFlight=async (req,res)=>{
    const flight=await flightService.deleteFlight(req.query.id);
    if(!flight){return res.status(404).json({ errors: ['Flight not found'] });}
    return res.json(flight);
};

const getFlights=async (req,res)=>{
    let flights
    if(req.query.airlineName == null || req.query.airlineName === "null")
        flights =await flightService.getFlights();
    else{
        flights =await flightService.getFlightsByAirline(req.query.airlineName);
    }
    res.json(flights);
};

const getFlightById = async (req,res) => {
    const flight = await flightService.getFlightById(req.query.id);
    res.json(flight);
}

const updateFlight=async(req,res)=>{
    try {
        const flight = await flightService.update(req.body.airlineName, req.body.flightTime, req.body.landTime, req.body.source, req.body.destination, req.body.price, req.query.id);
        if (!flight) {
            return res.status(404).json({errors: ['Flight not found']});
        }
        res.json(flight);
    }
    catch (e) {
        return null;
    }
};

const getUpdatePage=async(req,res)=>{
    res.render("../views/updateFlight.ejs")
}

const getCreatePage=async(req,res)=>{
    res.render("../views/createFlight.ejs")
}

const getDeletePage=async(req,res)=>{
    res.render("../views/deleteFlight.ejs")
}

const searchSpesicFlight=async (req,res)=>{
    const flightTime=req.query.flightTime;
    const landTime=req.query.landTime;
    const source=req.query.source;
    const destination=req.query.destination;
    const price=req.query.price;

        const value=await flightService.searchSpesicFlight(flightTime, landTime, source, destination,price);
        res.json(value);
}

const getPopularDes = async (req,res) => {
    const something = await flightService.getPopularDes();
    res.json(something)
}

const searchMoreSpecificFlight=async(req,res)=>{
    const flightTime=req.query.flightTime;
    const landTime=req.query.landTime;
    const source=req.query.source;
    const destination=req.query.destination;
    const priceMin=req.query.priceMin;
    const priceMax=req.query.priceMax;
    const airlineName=req.query.airlineName;

    const value=await flightService.searchMoreSpecificFlight(flightTime, landTime, source, destination,priceMin,priceMax,airlineName);
    res.json(value);
}

module.exports={
    createFlight,
    deleteFlight,
    getFlights,
    updateFlight,
    getUpdatePage,
    getFlightById,
    getCreatePage,
    getDeletePage,
    searchSpesicFlight,
    searchMoreSpecificFlight,
    getPopularDes
};