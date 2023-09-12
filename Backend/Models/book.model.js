const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    url : String,
    title: String,
    author: String,
    desc: String,
    userId:String
})


const BookModel = mongoose.model("book",bookSchema);

module.exports = BookModel;