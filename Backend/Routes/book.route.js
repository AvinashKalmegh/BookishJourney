const express = require("express");
const { getBookData, getSpecificBookData, deleteBookData, postBookData, updateBookData } = require("../Controllers/book.controller");

const BookRouter = express.Router();


BookRouter.get("/",getBookData);
BookRouter.get("/:id",getSpecificBookData);
BookRouter.delete("/:id",deleteBookData);
BookRouter.post("/addBook",postBookData);
BookRouter.patch("/:id",updateBookData);



module.exports = BookRouter;