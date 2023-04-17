const User= require('../models/User')
var mongoose = require('mongoose');

const updateUser = async (id,username, password ,email,firstname, lastname, age) => {
    const user = await getUserById(id);
    if (!user)
        return null;
    if( await getUserByUsername(username) && user.username !== username){
        return null;
    }
    user.username = username;
    user.password = password;
    user.email = email;
    user.firstname = firstname;
    user.lastname = lastname;
    user.age = age;
    return await user.save();
}

const getUserById = async (id) => {
    if(mongoose.Types.ObjectId.isValid(id)) {
        return await User.findById(id);
    } else {
        return null;
    }
};

const getUserByUsername= async (username) => {
    return await User.findOne(({username : username}));
};

const deleteUser= async (id) => {
    const user  =  await getUserById(id) ;
    if(!user){
        return null;
    }
    return await User.deleteOne(user);
};

module.exports = {
    updateUser, getUserByUsername , deleteUser
}

