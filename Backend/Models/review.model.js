const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    comment: String,
    rating: Number
})


const ReviewModel = mongoose.model("reviews",reviewSchema);


module.exports = ReviewModel;