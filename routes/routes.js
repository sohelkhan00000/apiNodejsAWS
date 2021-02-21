"use strict";

module.exports = function (app) {


    const listData = require("../controllers/ControlJsonData");


    app.route("/getCityByPinCode:pinCode").get(listData.getFunkgetCityByPinCode);




    app.route("/getCityByPinCode").post(listData.postFunkgetCityByPinCode);
    //app.route("/getCityByPinCode:pinCode").post(listData.postFunkgetCityByPinCode);


}



