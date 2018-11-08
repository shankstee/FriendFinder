console.log("linked");

var express = require("express");

var app = express();

var PORT = process.env.PORT || 3333;

// needed so that app can parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function (){
    console.log("Listening on port:" + PORT);

});



