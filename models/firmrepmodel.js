const mongoose = require('mongoose');
const firmrepSchema = new mongoose.Schema({
  apmcid: Number,
  firmid: Number,
  firmname: String,
  onion:Number,
  potato:Number,
  garlic:Number
});

module.exports = mongoose.model('FirmRep', firmrepSchema, 'firmrep');
