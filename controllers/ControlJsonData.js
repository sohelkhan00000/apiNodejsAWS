
const jsonConncection = require("../models/connection");

const mongoose = require('mongoose'),
tblModel = mongoose.model('tblApiCalls');


exports.getFunkgetCityByPinCode = function (req, res) {



    if (req.params.pinCode) {
        // res.send("Pin code is " + req.params.pinCode);
        res.json(jsonConncection);

    }
    else {
        res.send("Please enter pin code as parameter ");
    }

}

exports.postFunkgetCityByPinCode = function (req, res) {

    /* uncomment that to insert data */
    tblModel.findOne({ pincode: Number(req.body.pincode) }, function (err, data) {
        if (err) {

            console.log("Error block" + err);
        }
        else {

            res.send(JSON.stringify(data));

        }
    });
}

