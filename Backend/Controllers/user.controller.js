const UserModel = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const signup = async(req, res)=>{
    try {
        const payload = req.body;
        const data = await UserModel.findOne({email:payload.email})

        if(data){
            res.send({result: "User already registered"});
        }
        else{
            const passwordHash = await bcrypt.hashSync(payload.password,8);
            payload.password = passwordHash;

            const newUser = UserModel(payload);
            await newUser.save();

            res.send({result: "Registration successful",name:payload.name});
        }
    } catch (error) {
        res.send(error.message);
    }
}


const signin = async(req,res)=>{
    try {
        const payload = req.body;
        let data = await UserModel.findOne({email:payload.email});
        console.log(data);
        if(!data){
            res.send({result:"Please signup first"});
        }

        const correctPassword = await bcrypt.compareSync(
            payload.password,
            data.password
        )

        if(correctPassword){
            const token = await jwt.sign({email:data.email, user_id:data._id},process.env.KEY);
            res.send({result: "Login Successful", token});
        }
        else{
            res.send({result: "No user found"})
        }
    } catch (error) {
        res.send(error.message);
    }
}



module.exports = {signin, signup};