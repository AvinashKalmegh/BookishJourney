const express = require("express");
const { getBookData, getSpecificBookData, deleteBookData, postBookData, updateBookData, searchBookData } = require("../Controllers/book.controller");

const BookRouter = express.Router();


BookRouter.get("/",getBookData);
BookRouter.get("/:id",getSpecificBookData);
BookRouter.delete("/:id",deleteBookData);
BookRouter.post("/addBook",postBookData);
BookRouter.patch("/:id",updateBookData);
BookRouter.get("/search/:key",searchBookData);



module.exports = BookRouter;