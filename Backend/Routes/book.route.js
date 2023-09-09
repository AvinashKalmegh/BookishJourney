const express = require("express");
const { getBookData, getSpecificBookData } = require("../Controllers/book.controller");

const BookRouter = express.Router();


BookRouter.get("/",getBookData);
BookRouter.get("/:id",getSpecificBookData);



module.exports = BookRouter;