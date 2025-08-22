const { json } = require('body-parser');
const User = require('../models/userModel');
const pug = require('pug');

exports.getLogin = async(req,res) => {
    res.render('user/login');

};

exports.login = async (req, res) => {
    const { uname, upass } = req.body;
    const user = await User.findOne({ uname, upass });

    if (!user) {
        res.render('login',{user})
    }

    req.session.user = user;
    res.render('dashboard',user);
    //res.json({ success: true, loggedin:true,user });
    //res.render('user/users')
};