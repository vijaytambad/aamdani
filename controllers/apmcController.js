const { json } = require('body-parser');
const Apmc = require('../models/apmcmodel');
const pug = require('pug');
exports.listApmcs = async(req,res) =>{
    const apmcs =await Apmc.find();
    res.render('apmc/apmcs',{apmcs:apmcs});
    //res.send(apmcs);
}

exports.showAddForm = async(req,res) =>{
     res.render('apmc/addapmc');
}

exports.saveApmc = async (req, res) => {
  const { apmcid, apmcname, apmcadd } = req.body;
  await Apmc.create({ apmcid, apmcname, apmcadd });
  res.redirect('apmcs');
}