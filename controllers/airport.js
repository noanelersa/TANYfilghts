const airportService = require('../service/airport');
//
const deleteAirport = async (req, res)=>{
    return await airportService.deleteAirport(req.query.name);
};
const createAirport = async (req, res)=>{
    const airport= await airportService.createAirport(req.body.name ,req.body.state,req.body.published, req.body.owner , req.body.numOfTerminals);
    res.json(airport);
};
const updateAirport = async (req , res)=>{
    const airport= await airportService.updateAirport(req.body.name ,req.body.state,req.body.published, req.body.owner , req.body.numOfTerminals);
    res.json(airport);
};

const getHomePage= async (req,res)=>{
    res.render('../views/createAirport.ejs');
}
module.exports={
    deleteAirport,
    createAirport,
    updateAirport,
    getHomePage
};