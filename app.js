const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const _ = require("lodash");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index");
});
app.get("/bluetheme", function(req, res){
  res.render("bluetheme");
});
app.get("/greentheme", function(req, res){
  res.render("greentheme");
});
app.get("/purpletheme", function(req, res){
  res.render("purpletheme");
});



app.get("/myworks", function(req,res){
  res.render("myworks");
})

app.listen(3000, function(){
  console.log("Listening on port 3000");
})
