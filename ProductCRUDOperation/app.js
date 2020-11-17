//Load All Modules
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port= 9090;

//Database URL Details
var url = "mongodb://localhost:27017/mydb";

//creating reference of express
var app = express();

//Middleware modules setup
app.use(bodyParser.json()); //converting json req data.
app.use(bodyParser.urlencoded({extended:true}));   //Enable post,put and enable

//Database Connection with avoid warning properties
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true});   // reference ready to connect

//Connect to database
mongoose.connection;

//coding ....
var Product = require("./router/product.router.js");

//Middleware
app.use("/product",Product);

app.listen(port,()=>console.log('Server is running on ${port} number'));