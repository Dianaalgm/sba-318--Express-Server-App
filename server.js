//use require statements = import the needed dependencies/libraries
const express = require('express') ;

//initialize express to run
const app = express() ;
const PORT = '3000' ;
const fs = require('fs')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


//Creating a template with fs Library----------
app.engine("template",(filePath,options,callback)=>{
    fs.readFile(filePath, (err,content)=>{
        if(err) return callback(err);
        //convert to a string
        const rendered = content
        .toString()
        //replace sections of it with the values passed to the engine
        .replaceAll('#title#', `${options.title}`)
        .replace("#content#", `${options.content}`);
        return callback(null,rendered);
    });
});

app.get("/",(req,res)=>{
    let options = {
        title: "Welcome user!" ,
        content: "This is my View Engine Template!"
    }
    res.render('index',options)
});

//Random data---POST
let categories = [
    { id: 1, name: 'Samantha', age: 28},
    { id: 2, name: 'Greg', age:34 },
  ];
  
  let items = [categories];

//Middleware--------------------------------------------
app.use(bodyParser.json());
// app.use(bodyParser.json());
// Handle PUT request to update a profile
// app.get("/profile",(req,res)=>{
//     res.send("Specify profile ID: /profile/id")
// });
// app.put('/profile/:id', (req, res) => {
//     const profileId = req.params.id;
//     const newData = req.body;
//     res.status(200).json({ message: 'Resource updated successfully' });
// });

//three different categories seperated in the module Routes-----
const user = require("./Routes/user");
app.use("/user", user)
const commentRoutes = require("./Routes/comments");
app.use("/comment", commentRoutes)
const postRoutes = require("./Routes/posts");
app.use("/posts", postRoutes)

//error handler for middleware
app.use((err,req,res,next) => {
    res.status(400).send(err.message);
});

//GET routes---------------------------------------
// app.get("/api/users", (req, res) => {
//     res.json(users);
//   });
// // ----------------------> Gets all Users
  
//   app.get("/users/:id", (req, res) => {         //<-------------Params
//     const user = users.find((u) => u.id == req.params.id);
//     if (user) res.json(user);
//   });


// GET route to retrieve all items
app.get('/items', (req, res) => {
    res.json(items);
  });
  
// POST route to create new items
  app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
  
    res.status(201).json({ message: 'Item created successfully', newItem });
  });

// app.get("/",(req,res)=>{
//     res.send("Welcome to the homepage!")
// });
app.get("/about",(req,res)=>{
    res.send("About us")
});
app.get("/contact",(req,res)=>{
    res.send("Get in contact with us!")
});


//setting up the Template Engine
app.set("views","./views"); //specify the views
app.set("view engine", "template"); //register the template



//created the express server, and the port to run it on
app.listen(PORT, (req,res)=>{
    console.log(`Currently listening on ${PORT}`)
});