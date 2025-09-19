const { json } = require('body-parser');
const User = require('../models/userModel');
const Apmc=require('../models/apmcmodel')
const pug = require('pug');
const session = require('express-session');

exports.getLogin = async(req,res) => {
    res.render('user/login');

};

exports.postLogin = async (req, res) => {
    const { uname, upass } = req.body;
    const myuser = await  User.findOne({ uname, upass });
    //const utype = myuser.uname;
    console.log(myuser.utypeid);
    if (!myuser) {
        res.render('user/login');
    }
    req.session.user = myuser;
    const user=req.session.user;
    const ap = await Apmc.findOne({apmcid:req.session.user.apmcid});
    if(myuser.utypeid == 'superadmin'){
        res.render('dashboard',{user,apmcname:ap.apmcname});
    }
        if(myuser.utypeid=='admin'){
        res.render('admindash',{user,apmcname:ap.apmcname});
    }
    if(myuser.utypeid=='user'){
        res.render('dashboard',{user,apmcname:ap.apmcname});
    }

    //res.render('dashboard',{user,apmcname:ap.apmcname});
    //console.log(ap.apmcid);
   
};