const clientService = require('../service/client');
const worker_threads = require("worker_threads");
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
    if(!client){
        return res.status(404).json({errors: 'Error update user'})
    }
    if(req.session.userType === 'user'){
        req.session.username = req.body.username;
    }
    res.json(client);
};



module.exports={
    deleteClient,
    createClient,
    updateClient,
};