const Airport= require('../models/airports')
// create , get(for each) , getAll , update , delete

const createAirport = async (name, password, state, published, owner, numOfTerminals) => {
    if((await getAirportByName(name))){
        return null;
    }
    console.log((await getAirportByName(name)))

    const airport = new Airport({
        name: name,
        state: state,
        owner: owner,
        password: password
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
    return await Airport.findOne({name:name});
};
const updateAirport = async (oldName,name,password, state, published, owner, numOfTerminals) => {
    const airport = await getAirportByName(oldName);
    if (!airport){
        return null;
    }
    airport.name = name
    airport.password = password
    airport.name = name;
    airport.state = state;
    airport.owner = owner;
    airport.published = published;
    airport.numOfTerminals = numOfTerminals;

    return await airport.save();
};
const getAirportByUserAndPass = async (name,password) =>{
    return await Airport.findOne({name:name, password: password});
}
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
    deleteAirport,
    getAirportByUserAndPass
};