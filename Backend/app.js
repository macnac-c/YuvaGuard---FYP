const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/yuvaguard";

app.use(express.json());

main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

//root route
app.get("/" , (req,res) => {
    res.send("Hi , I am root");
})

//register route
app.post("/register" , async(req,res) => {
    const newUser = new User(req.body);
    console.log(newUser);
    await newUser.save();
    res.send("user registered successfully");
})

app.listen(8080 , () => {
    console.log("server is listening to port 8080");
})