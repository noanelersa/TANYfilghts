const User = require("../models/User");
const Airport = require("../service/airport");

async function login(username, password) {
    if(String(username).includes("Airport-")){
        username = username.substring(8);
        const user = await Airport.getAirportByUserAndPass(username,password)
        return user != null ? "airport" : null;
    }
    const user = await User.findOne({ username: username, password });

    return user != null ? "user" : null;
}

async function register(username, password, email,firstname,lastname,age) {
    if( await getUserByUsername(username)){
        throw "Username Is Already Taken"
    }

    const user = new User({
        username: username,
        password: password,
        email: email,
        firstname:firstname,
        lastname:lastname,
        age:age
    });

    await user.save()        
}
const getUserByUsername= async (username) => {
    return await User.findOne(({username : username}));
};

module.exports = { login, register }