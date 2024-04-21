const express = require("express");
const router = express.Router();

//middleware for user.js
router.use((req,res,next)=>{
    next();
});

router
    .route("/")
    .get((req,res)=>{
        res.send("Get User");
    })
    .post((req,res)=>{
        res.send("Create User");
    })
    .delete((req,res)=>{
        res.send("Delete User");
    });

router.get("/settings",(req,res)=>{
    res.send("Get User Settings");
});

module.exports= router ;