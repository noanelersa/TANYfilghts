const Client= require('../models/clients')
// create , get(for each) , getAll , update , delete

const createClient = async (username, password, firstName, lastName, age , emailAddress) => {
    const client = new Client({
        username: username,
        password: password,
        firstName:firstName,
        lastName: lastName,
        age: age,
        emailAddress: emailAddress
    });

    // if (published) {
    //     airport.published = published;
    // }

    return await client.save();
};

const getClients = async () =>{
    return await Client.find({}); // there are not drishot so empty... (in the{})
};
const getclienttByUsername = async (username)=>{
    return await Client.findOne({username:username});/////
};

const getclientByEmailAddress = async (emailAddress)=>{
    return await Client.findOne({emailAddress:emailAddress})
}
const updateClient = async (username, password, firstName, lastName, age , emailAddress) => {
    const client = await getclienttByUsername(username);
    if (!client){
        return null;
    }
    client.username = usernamee;
    client.password = password;
    client.firstName = firstName;
    client.lastName = lastName;
    client.age = age;
    client.emailAddress = emailAddress

    return await client.save();
};
const deleteClient = async (username)=>{
    const client = await getclienttByUsername(username);
    if (!client){
        return null;
    }
    await client.remove();
    return client;
};

module.exports = {
    createClient,
    getClients,
    getclienttByUsername,
    getclientByEmailAddress,
    updateClient,
    deleteClient
};