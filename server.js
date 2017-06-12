var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use("/", routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, function()
{
	console.log("Listening on port: " + PORT);
});