// Require NPM express package
var express = require("express");

// Store express function in a variable
var app = express();

var PORT = process.env.PORT || 3333;
// if we're in the production environment, use process.env.Port
// else if we're in our development environment, use 3000

// needed so that app can parse data
// Express middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Link server to route files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Start the server and have it begin to listen for requests
app.listen(PORT, function (){
    console.log("Listening on port:" + PORT);

});



