var friendsListData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsListData);
        
    });

    app.post("/api/friends", function (req, res) {
        friendsListData.push(req.body);
        res.json(true);
    })
    
}
