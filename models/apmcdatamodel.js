const mongoose = require('mongoose');

const apmcdata = new mongoose.Schema({
    apmcid:{type:Number,required:true},
    trdate:Date,
    prod:String,
    Qty:Number
});
module.exports = mongoose.model("Apmcdata",apmcdata,'apmcdata');