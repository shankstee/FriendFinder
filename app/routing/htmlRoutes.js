// Require path package
var path = require("path");

// Creating a function that can be imported into other files
module.exports = function (app) {
    // code to load the home.html page on load at the / root file path
    app.get("/", function (req, res) { 
        // Use express .sendFile method which takes the path of the file we want to serve to the client
        // The path.join() method joins all given path segments together
        // __dirname returns the path of the current application
        res.sendFile(path.join(__dirname + "/../public/home.html"));
        
    });
    // GET the survey.html page when user redirects to /survey file path
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });


    
};