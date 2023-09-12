const express = require("express");
const { getReviewData, postReviewData, deleteReviewData, updateReviewData, dailyData } = require("../Controllers/review.controller");

const ReviewRouter = express();


ReviewRouter.get("/",getReviewData);
ReviewRouter.post("/addReview",postReviewData);
ReviewRouter.delete("/deleteReview/:id",deleteReviewData);
ReviewRouter.patch("/updateReview/:id",updateReviewData);
ReviewRouter.get("/dailyData",dailyData);


module.exports = ReviewRouter;
