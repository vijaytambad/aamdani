const mongoose = require('mongoose');

const firmSchema = new mongoose.Schema({
  firmid: { type: Number, required: true, unique: true },
  apmcid: Number,
  prefix: String,
  firmname: String,
});
module.exports = mongoose.model("Firm",firmSchema,'firms');
