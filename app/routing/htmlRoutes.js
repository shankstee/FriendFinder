var path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) { // code to load the home.html page on load.
        res.sendFile(path.join(__dirname + "/../public/home.html"));
        
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });


    
};