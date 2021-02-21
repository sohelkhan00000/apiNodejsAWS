const express = require("express");
const bodyParser = require("body-parser");
const basicAuth = require('express-basic-auth');
const routes = require("./routes/routes.js");

const app = express();

/* data base connection */
const mongoose = require('mongoose');
const uri = "mongodb+srv://mdbUserAdmin:Abc8226456@apicallcluster.9edjc.mongodb.net/dbApiCall?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then((err) => {
    console.log("connected!");

}).catch((err) => {
    console.log("Error is : " + err);
});


app.use("/",express.static(__dirname +"/views"));

app.use("/", basicAuth({
    users: { 'admin': 'supersecret' }
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

routes(app);


app.listen(8080);


