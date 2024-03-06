const express = require("express");
const mongoose = require("mongoose");
const user = require("./routes/user.js");

require("dotenv").config();


const app = express();


// const DATABASE_URL = "mongodb://127.0.0.1:27017/maxx-hospital"



// middleware to parse json req body
app.use(express.json());


// db connect
const connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL) 
    .then(() => {
        console.log('Connected to mongoDB database...')
    })
    .catch((error) => {
        console.log("Issue in DB Connection.")
        console.error(error.message)
        process.exit(1);
    })
}
connectDb();





// use the router
// const administratorRoutes = require("./routes/administrater.js");

app.use("/", user);


app.get("/", (req, res) => {
    res.send("hello there");
})



app.listen(3001, () => {
    // res.send("hello there")
    console.log("listening on port 3000");
})


