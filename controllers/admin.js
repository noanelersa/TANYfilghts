const adminService = require('../service/admin');
//
const deleteAdmin = async (req, res)=>{
    return await adminService.deleteAdmin(req.query.name);
};
const createAdmin = async (req, res)=>{
    const admin= await adminService.createAdmin(req.body.username ,req.body.password);
    if(!admin){
        return res.status(404).json({errors:"error"})
    }
    req.session.username = req.body.username;
    req.session.userType = 'admin';
    res.json(admin);
};
const updateAdmin = async (req , res)=>{
    const admin= await adminService.updateAdmin(req.query.id,req.body.username ,req.body.password);
    if(!admin){
        return res.status(404).json({errors: 'admin already create'})
    }
    req.session.username = req.body.username;
    res.json(admin);
};
const getAdminByUsername = async (req,res) =>{
    const admin = await adminService.getAdminByUsername(req.query.username);
    res.json(admin)
};



module.exports={
    deleteAdmin,
    createAdmin,
    updateAdmin,
    getAdminByUsername
};