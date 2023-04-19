const airportService = require('../service/airport');
const {getAirportByName} = require("../service/airport");
//
const deleteAirport = async (req, res)=>{
    const airport = await airportService.deleteAirport(req.body.name);
    res.json(airport);
};
const createAirport = async (req, res)=>{
    const airport= await airportService.createAirport(req.body.name, req.body.password, req.body.state,req.body.published, req.body.owner , req.body.numOfTerminals);
    if (!airport){
        return res.status(404).json({errors: "name already exist"})
    }
    res.json(airport);
};
const updateAirport = async (req , res)=>{
    if(await getAirportByName(req.body.name) && req.body.name !== req.body.oldname){return res.status(404).json({errors:["name already exist"]});}
    const airport= await airportService.updateAirport(req.body.oldname,req.body.name, req.body.password ,req.body.state,req.body.published, req.body.owner , req.body.numOfTerminals);
    if(!airport){
        return res.status(404).json({errors:["name already exist"]});
    }
    if(req.session.userType === 'airport'){
        req.session.username = req.body.name;
    }
    res.json(airport);
};

const getAirport = async (req,res) => {
    const airports = await airportService.getAirportByName(req.query.name);
    res.json(airports);
}
const getAirports = async (req,res) => {
    const airports = await airportService.getAirports()
    res.json(airports)
}
const getHomePage= async (req,res)=>{
    res.render('../views/createAirport.ejs');
}
module.exports={
    deleteAirport,
    createAirport,
    updateAirport,
    getHomePage,
    getAirport,
    getAirports
};