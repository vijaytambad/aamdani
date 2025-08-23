const express =require('express');
const { json } = require('body-parser');
const Firm = require('../models/firmModel');
const pug = require('pug');
const app = express();
exports.listFirms = async(req,res) =>{
    const fid = req.query.apmcid;
    const firms =await Firm.find({apmcid:fid});
    res.render('firm/firms',{firms:firms})
    //res.send(fid);
    //console.log(fid);
}