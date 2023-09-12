const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    comment: String,
    rating: Number,
      createdAt: {
        type: Number,
        default: new Date().getDate(), // Automatically set to the current date and time
      },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
    bookId: {type: mongoose.Schema.Types.ObjectId, ref: "book"}
})


const ReviewModel = mongoose.model("review",reviewSchema);


module.exports = ReviewModel;