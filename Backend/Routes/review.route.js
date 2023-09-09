const express = require("express");
const { getReviewData, postReviewData, deleteReviewData } = require("../Controllers/review.controller");

const ReviewRouter = express();


ReviewRouter.get("/",getReviewData);
ReviewRouter.post("/add",postReviewData);
ReviewRouter.delete("/delete/:id",deleteReviewData);


module.exports = ReviewRouter;
