const userService = require('../service/user');
const {model} = require("mongoose");

const updateUser = async (req, res) => {
    const user= await userService.updateUser(req.query.id, req.body.username, req.body.password ,req.body.email,  req.body.firstname,  req.body.lastname,  req.body.age);
    if (!user) {
        return res.status(404).json({ errors: ['User not found'] });
    }
    req.session.username = req.body.username;
    res.json(user);

};

const getUser = async (req, res) => {
    const username= req.query.username;
    const user = await userService.getUserByUsername(username);
    if(!user)
        return res.status(404).json({ errors: ['User not found'] });
    res.json(user);
}

const deleteUser = async (req, res) => {
    const user = await userService.deleteUser(req.query.id)
    if(!user)
        return res.status(404).json({ errors: ['User not found'] });
    res.json(user);
}

module.exports = {
    updateUser, getUser, deleteUser
}