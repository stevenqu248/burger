var connection = require("./connection.js");

var orm = 
{
	selectAll: function(callback) 
	{
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(error, result) 
		{
			if(error)
				console.log(error);

			callback(result);
		});
	},
	insertOne: function(name, callback) 
	{
		var queryString = "INSERT INTO burgers(burger_name, date) VALUES (?, now())";
		console.log(queryString);
		connection.query(queryString, [name], function(error, result) 
		{
			if(error)
				console.log(error);

			callback(result);
		});
	},
	updateOne: function(id, callback) 
	{
		var queryString = "UPDATE burgers SET devoured = TRUE WHERE id = ?";
		connection.query(queryString, [id], function(error, result) 
		{
			if(error)
				console.log(error);

			callback(result);
		});
	}
};

module.exports = orm;
