const express = require("express");
const router = express.Router();

//middleware for posts,js
router.use((req,res,next)=>{
    next();
});


router
    .route("/")
    .get((req,res)=>{
        res.send("Get Post");
    })
    .post((req,res)=>{
        res.send("Create Post");
    })
    .delete((req,res)=>{
        res.send("Delete Post");
    });

router.get("/posts",(req,res)=>{
    res.send("Get Post");
});

module.exports= router ;