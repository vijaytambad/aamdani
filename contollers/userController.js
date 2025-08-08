const User = require('../models/userModel');
const pug = require('pug');

exports.listUsers = async (req, res) => {
  const users = await User.find();
  res.render('user/users',{users:users});
};

exports.showAddForm = (req, res) => {
  res.render('user/register');
};

exports.saveUser = async (req, res) => {
  const { uid, uname, upass, utypeid, rollid } = req.body;
  await User.create({ uid, uname, upass, utypeid, rollid });
  res.redirect('users');
};
