const mongoose = require('mongoose');

const firmdata = new mongoose.Schema({
    firmid:{type:Number,required:true},
    trdate:Date,
    prod:String,
    Qty:Number
});
module.exports = mongoose.model("FirmData",firmdata,'firmdata');