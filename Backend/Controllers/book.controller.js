const BookModel = require("../Models/book.model");

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
        let data = await BookModel.findById(req.params.id);
        res.send({result: data});
    } catch (error) {
        res.send(error.message);
        
    }
}



module.exports = {getBookData, getSpecificBookData};