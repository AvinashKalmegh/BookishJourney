const express = require("express");
const { getReviewData, postReviewData, deleteReviewData, updateReviewData } = require("../Controllers/review.controller");

const ReviewRouter = express();


ReviewRouter.get("/",getReviewData);
ReviewRouter.post("/addReview",postReviewData);
ReviewRouter.delete("/deleteReview/:id",deleteReviewData);
ReviewRouter.patch("/updateReview/:id",updateReviewData);


module.exports = ReviewRouter;
