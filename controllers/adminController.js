const { json } = require('body-parser');
const User = require('../models/userModel');
const pug = require('pug');
const session = require('express-session');

exports.getLogin = async(req,res) => {
    res.render('user/login');

};

exports.postLogin = async (req, res) => {
    const { uname, upass } = req.body;
    const user = await User.findOne({ uname, upass });
    const users ={uname ,upass};
    /*if (!user) {
        res.render('user/login');
    }*/
    req.session.user = user;
    res.render('dashboard',users);
    //res.json(users);
    //res.render('user/users')
};