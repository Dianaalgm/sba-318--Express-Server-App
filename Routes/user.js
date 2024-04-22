const express = require("express");
const router = express.Router();

//MIDDLEWARE for user.js--------
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

const users = [
    {
      id: 1,
      name: "Samantha",
      username: "sam123",
      email: "sam123@example.com",
    },
    {
      id: 2,
      name: "Gregory",
      username: "Greg1",
      email: "greg1@example.com",
    },
    {
      id: 3,
      name: "Daisy",
      username: "Daisies",
      email: "daisyy2@example.com",
    },
  ];
  
module.exports = users;
module.exports= router ;