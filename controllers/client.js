const clientService = require('../service/client');
//
const deleteClient = async (req, res)=>{
    return await clientService.deleteClient(req.query.name);
};
const createClient = async (req, res)=>{
    const client= await clientService.createClient(req.body.username ,req.body.password,req.body.firstName, req.body.lastName , req.body.age , req.body.emailAddress);
    res.json(client);
};
const updateClient = async (req , res)=>{
    const client= await clientService.updateClient(req.body.username ,req.body.password,req.body.firstName, req.body.lastName , req.body.age , req.body.emailAddress);
    res.json(client);
};

const getHomePage= async (req,res)=>{
    res.render('../views/createClient.ejs');
}

module.exports={
    deleteClient,
    createClient,
    updateClient,
    getHomePage
};