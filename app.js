const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Take shower", "Buy cats food", "Feed the cats"];
const workItems = [];

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static("public"));

app.get("/", function(req, res) {

const day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: items
  })

})

app.get("/work",function(req,res){
  res.render("list",{
    listTitle: "Work to do list.",
    newListItems: workItems
  })
})

app.get("/about",function(req,res){
  res.render("about")
})

app.post("/", function(req,res){
  const item = req.body.newItem;
  const buttonValue = req.body.button;
  if(buttonValue === "Work"){
    workItems.push(item);
    res.redirect("/work")
  }else{items.push(item);
  res.redirect("/");}


})







app.listen(3000, function(req, res) {
  console.log("server running at port 3000")
})
