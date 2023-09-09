const ReviewModel = require("../Models/review.model");

const getReviewData = async(req, res)=>{
    try {
        let data = await ReviewModel.find();
        res.send({"result" : data});
    } catch (error) {
        res.send(error.message);
    }
}

const postReviewData = async(req, res)=>{
    try {
        let data = new ReviewModel(req.body);
        await data.save();
        res.send({"result" : data});
    } catch (error) {
        res.send(error.message);
    }
}

const deleteReviewData = async()=>{
    try {
        let {_id} = req.params;
        let data = await ReviewModel.findOneAndDelete({_id});
        res.send({result : "Data successfully deleted"});
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = {getReviewData, postReviewData, deleteReviewData};