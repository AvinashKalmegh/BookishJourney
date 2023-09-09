const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    url : String,
    title: String,
    author: String,
    price: Number
})


const BookModel = mongoose.model("Book",bookSchema);

module.exports = BookModel;