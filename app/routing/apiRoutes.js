// Import my friends.js file so that we can access the friendsList array of objects
var friendsListData = require("../data/friends.js");

// Function to export GET and POST to the server file
module.exports = function (app) {
    // GET the information from the /api/friends file path and return the information in JSON format
    app.get("/api/friends", function (req, res) {
        res.json(friendsListData);
        
    });
    // POST/PUSH the the newFriends obj the user created to the friendsList array of Objects
    app.post("/api/friends", function (req, res) {
        friendsListData.push(req.body);
        res.json(true);
    })
    
}
