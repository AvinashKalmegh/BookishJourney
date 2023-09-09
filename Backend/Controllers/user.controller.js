const UserModel = require("../Models/user.model");

const postUser = async(req, res)=>{
    try {
        let data = new UserModel(req.body);
        await data.save();
    } catch (error) {
        res.send(error.message);
    }
}