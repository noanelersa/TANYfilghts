const User = require("../models/User");

async function login(username, password) {
    const user = await User.findOne({ username: username, password });
    return user != null
}

async function register(username, password, email,firstname,lastname,age) {

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

module.exports = { login, register }