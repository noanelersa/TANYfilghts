var mongoose = require('mongoose');
const Admin = require("../models/admin");

const updateAdmin = async (id,username, password) => {
    const admin = await getAdminById(id);
    if (!admin)
        return null;
    if( await getAdminByUsername(username) && admin.username !== username){
        return null;
    }
    admin.username = username;
    admin.password = password;
    return await admin.save();
}

const getAdminById = async (id) => {
    if(mongoose.Types.ObjectId.isValid(id)) {
        return await Admin.findById(id);
    } else {
        return null;
    }
};

const getAdminByUsername= async (username) => {
    return await Admin.findOne(({username : username}));
};

const deleteAdmin= async (id) => {
    const admin  =  await getAdminById(id) ;
    if(!admin){
        return null;
    }
    return await Admin.deleteOne(admin);
};

const createAdmin = async (username, password) => {
    if( await getAdminByUsername(username)){
        return null;
    }
    const admin = new Admin({
        username: username,
        password: password,
    });


    return await admin.save();
};
const getAirportByUserAndPass = async (username, password) =>{
    return await Admin.findOne({username: username, password: password});
}

module.exports = {
    updateAdmin, getAdminByUsername , deleteAdmin, createAdmin, getAirportByUserAndPass
}
