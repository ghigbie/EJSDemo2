var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("<h1>WELCOME TO THE HOME PAGE!</h1>");
});

app.get("/youhavetolove/:thing", function(req, res){
	var thing = req.params.thing.toLowerCase();
	res.render()
});

app.listen(3300, function(){
	console.log("The server has started to listen. Yay!!!");
});