//use require statements = import the needed dependencies/libraries
const express = require('express') ;

//initialize express to run
const app = express() ;
const PORT = '3000' ;


//Middleware--------------------------------------------
const userRoutes = require("./Routes/user");
app.use("/user", userRoutes)

//error handler for middleware
app.use((err,req,res,next) => {
    res.status(400).send(err.message);
});

//GET routes---------------------------------------
app.get("/",(req,res)=>{
    res.send("Welcome to the homepage!")
});
app.get("/about",(req,res)=>{
    res.send("About us")
});
app.get("/contact",(req,res)=>{
    res.send("Get in contact with us!")
});




//created the express server, and the port to run it on
app.listen(PORT, (req,res)=>{
    console.log(`Currently listening on ${PORT}`)
});