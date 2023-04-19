const Airport= require('../models/airports')
// create , get(for each) , getAll , update , delete

const createAirport = async (name, state, published, owner, numOfTerminals) => {
    const airport = new Airport({
        name: name,
        state: state,
        owner: owner
    });

    if (published) {
        airport.published = published;
    }
    if (numOfTerminals){
        airport.numOfTerminals = numOfTerminals;
    }

    return await airport.save();
};

const getAirports = async () =>{
    return await Airport.find({}); // there are not drishot so empty... (in the{})
};
const getAirportByName = async (name)=>{
    return await Airport.findOne({name:name});/////
};
const updateAirport = async (name, state, published, owner, numOfTerminals) => {
    const airport = await getAirportByName(name);
    if (!airport){
        return null;
    }
    airport.name = name;
    airport.state = state;
    airport.owner = owner;
    airport.published = published;
    airport.numOfTerminals = numOfTerminals;

    return await airport.save();
};
const deleteAirport = async (name)=>{
    const airport = await getAirportByName(name);
    if (!airport){
        return null;
    }
    await airport.remove();
    return airport;
};

module.exports = {
    createAirport,
    getAirports,
    getAirportByName,
    updateAirport,
    deleteAirport
};