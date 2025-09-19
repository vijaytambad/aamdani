const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  apmcid: { type: Number, required: true, unique: true },
  apmcname: String,
  apmcadd: String,
  onion:Number,
  potato:Number,
  garlic:Number
});

module.exports = mongoose.model('Apmc', userSchema, 'apmcs');
