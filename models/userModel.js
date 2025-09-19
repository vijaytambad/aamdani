const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uid: { type: Number, required: true, unique: true },
  uname: String,
  upass: String,
  utypeid: String,
  apmcid: Number
});

module.exports = mongoose.model('User', userSchema, 'users');
