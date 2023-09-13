const BookModel = require("../Models/book.model");
const ReviewModel = require("../Models/review.model");
const UserModel = require("../Models/user.model");

const getBookData = async(req,res)=>{
    try {
        let data = await BookModel.find();
        res.send({"result": data})
    } catch (error) {
        res.send(error.message);
    }
}


const getSpecificBookData = async(req,res)=>{
    try {
        // console.log(req.params);
        let data = await BookModel.findById(req.params.id);
        let review = await ReviewModel.find({bookId: req.params.id })
    

        res.send({bookData: data, reviews: review});
    } catch (error) {
        res.send(error.message);
        
    }
}

const postBookData = async(req, res)=>{
    try {
        let data = new BookModel(req.body);
        await data.save();
        res.send({"result" : data});
    } catch (error) {
        res.send(error.message);
    }
}

const deleteBookData = async(req,res)=>{
    try {
        let data = await BookModel.findByIdAndDelete(req.params.id);
        res.send({result : "Data successfully deleted"});
    } catch (error) {
        res.send(error.message);
    }
}


const updateBookData = async(req,res)=>{
    try {
        // console.log(req.body, req.params.id);
        let data = await BookModel.findByIdAndUpdate(req.params.id,req.body);

        res.send({result: "Data successfully updated"});
    } catch (error) {
        res.send(error.message);
    }
}

const searchBookData = async(req,res)=>{
    // res.send("hii")
    try {
        let result = await BookModel.find({
            "$or":[
                {title : {$regex : req.params.key}},
                {author : {$regex : req.params.key}}
            ]
        })

        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
}


module.exports = {getBookData, getSpecificBookData, postBookData, deleteBookData,updateBookData,searchBookData};