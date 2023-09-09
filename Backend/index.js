const express = require("express");
const main = require("./Config/db");
const BookRouter = require("./Routes/book.route");
const ReviewRouter = require("./Routes/review.route");
require("dotenv").config();
const PORT = 3500 || process.env.PORT;

const app = express();

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.use("/api/book",BookRouter);
app.use("/api/review",ReviewRouter);
// app.use("/api/user");

app.listen(PORT,()=>{
    main();
    console.log(`Connected to server at port ${PORT}`);
})