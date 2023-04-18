const airportService = require('../service/airport');
//
const deleteAirport = async (req, res)=>{
    return await airportService.deleteAirport(req.query.name);
};
const createAirport = async (req, res)=>{
    const airport= await airportService.createAirport(req.body.name, req.body.password, req.body.state,req.body.published, req.body.owner , req.body.numOfTerminals);
    if (!airport){
        return res.status(404).json({errors: "name already exist"})
    }
    res.json(airport);
};
const updateAirport = async (req , res)=>{
    const airport= await airportService.updateAirport(req.body.name, req.body.password ,req.body.state,req.body.published, req.body.owner , req.body.numOfTerminals);
    res.json(airport);
};

const getAirports = async (req,res) => {
    const airports = await airportService.getAirports();
    res.json(airports);
}
const getHomePage= async (req,res)=>{
    res.render('../views/createAirport.ejs');
}
module.exports={
    deleteAirport,
    createAirport,
    updateAirport,
    getHomePage,
    getAirports
};