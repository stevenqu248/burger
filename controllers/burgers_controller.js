var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response) 
{
	burger.selectAll(function(data) 
	{
		var handlebarObject = 
		{
			burgers: data
		};
		console.log(handlebarObject);
		response.render("index", handlebarObject);
	});
});

router.post("/", function(request, response) 
{
	console.log("post");
	var name = request.body.name;
	burger.insertOne(name, function() 
	{
		response.redirect("/");
	});
});

router.put("/:id", function(request, response) 
{
	console.log("put");
	console.log(request.params);
	console.log(request.body);
	var id = request.params.id;

	burger.updateOne(id, function()
	{
		response.redirect("/");
	});
});

module.exports = router;