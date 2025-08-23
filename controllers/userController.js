const { json } = require('body-parser');
const User = require('../models/userModel');
const pug = require('pug');

exports.listUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        // Render the partial template to HTML string
        res.render('user/users', { users });
            //res.render('layout', { mylist: html });
        
    } catch (err) {
        next(err);
    }
};
    

exports.showAddForm = (req, res) => {
  res.render('user/register');
};

exports.saveUser = async (req, res) => {
  const { uid, uname, upass, utypeid, rollid } = req.body;
  await User.create({ uid, uname, upass, utypeid, rollid });
  res.redirect('users');
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};

exports.login = (req,res) =>{
    res.send("its here");
}