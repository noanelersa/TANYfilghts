const flightService = require('../service/flights');
//airlineName,flightTime,landTime,source,destination
const createFlight=async (req,res)=>{
    const flight = await flightService.createFlight(req.body.airlineName,req.body.flightTime,req.body.landTime,req.body.source,req.body.destination);
    return res.json(flight);
};

const deleteFlight=async (req,res)=>{
    const flight=await flightService.deleteFlight(req.query.id);
    if(!flight){return res.status(404).json({ errors: ['Flight not found'] });}
    return res.json(flight);
};

const getFlights=async (req,res)=>{
    const flights=await flightService.getFlights();
    res.json(flights);
};

const update=async(req,res)=>{
    if (!req.body.title) {
        res.status(400).json({
            message: "title is required",
        });
    }
    const flight=await flightService.update(req.body.airlineName,req.body.flightTime,req.body.landTime,req.body.source,req.body.destination,req.query.id);
    if(!flight){return res.status(404).json({ errors: ['Flight not found'] });}
    res.json(flight);
};

const getHomePage=async(req,res)=>{
    res.render("../views/updateFlight.ejs")
}
module.exports={
    createFlight,
    deleteFlight,
    getFlights,
    update,
    getHomePage
};