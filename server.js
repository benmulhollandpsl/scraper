
//Dependencies
var mongoose = require("mongoose");
var express = require("express");
var app = express();
var handlebars = require("express-handlebars");
var logger = require("morgan");
var bodyParser = require("body-parser");
require("./routes/index")(app);

// var db = require("./models");
//Initialize Express
var PORT = 8080;



// mongoose.Promise = Promise;


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

//Middleware
//the data that you get from the webpage takes the information from the post request and makes the data clean and readable
app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
//parses the client-side data and converts it to JSON
app.use(express.json());


app.engine("handlebars", handlebars({defaultLayout: "main"}));
//the first argument is the name of the extension, the second argument is where you want to populate/render the whole page 
app.set("view engine", "handlebars");
//static refers to converting the public folder (the local host) into a static route
// app.use(express.static("public"))
app.use('/static', express.static('public'))



var apiRoute = require("./routes/apiRoutes");
apiRoute(app);
// Set the app to listen on port 3000
app.listen(PORT, function() {
    console.log("App running on Port 8080!");
  });
// //Deploy to heroku
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// mongoose.connect(MONGODB_URI);