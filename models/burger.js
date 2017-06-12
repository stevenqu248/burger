var orm = require("../config/orm.js");

var burger = 
{
	selectAll: function(callback) 
	{
		orm.selectAll(function(result) 
		{
			callback(result);
		});
	},

	insertOne: function(name, callback) 
	{
		orm.insertOne(name, function(result) 
		{
			callback(result);
		});
	},

	updateOne: function(id, callback) 
	{
		orm.updateOne(id, function(result) 
		{
			callback(result);
		});
	}
};

module.exports = burger;