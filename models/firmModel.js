const mongoose = require('mongoose');

const firmSchema = new mongoose.Schema({
  firmid: { type: Number, required: true, unique: true },
  apmcid: Number,
  prefix: String,
  fname: String,
  arrivalid: Number,
  itemtype:String,
  itemQuality:String,
  arrdate:Date,
  NoofBags:Number,
  QtyKg:Number
});
module.exports = mongoose.model("Firm",firmSchema,'firms');
