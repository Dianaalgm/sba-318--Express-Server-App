const express = require("express");
const router = express.Router();

//middleware for comment.js
router.use((req,res,next)=>{
    next();
});

router
    .route("/")
    .get((req,res)=>{
        res.send("Get Comments");
    })
    .post((req,res)=>{
        res.send("Create Comments");
    })
    .delete((req,res)=>{
        res.send("Delete Comments");
    });

router.get("/comments",(req,res)=>{
    res.send("Get Comments");
});

module.exports= router ;