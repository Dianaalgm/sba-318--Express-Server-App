//use require statements = import the needed dependencies/libraries
const express = require('express') ;

//initialize express to run
const app = express() ;
const PORT = '3000' ;

//created the express server, and the port to run it on
app.listen(PORT, (req,res)=>{
    console.log(`Currently listening on ${PORT}`)
});

//GET routes

app.get("/",(req,res)=>{
    res.send("Welcome to the homepage!")
})