
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crateSchema = new Schema({
    officeName: String,
    pincode: String,
    taluk: String,
    districtName: String,
    stateName: String,
});

module.exports = mongoose.model('tblApiCalls', crateSchema);

