const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: {type: String,unique:true},
    password: String,
    reviewId: {type: mongoose.Schema.Types.ObjectId, ref: "review"},
})


const UserModel = mongoose.model("user",userSchema);


module.exports = UserModel;