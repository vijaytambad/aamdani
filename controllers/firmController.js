const express =require('express');
const { json } = require('body-parser');
const Firm = require('../models/firmModel');
const FirmRep = require('../models/firmrepmodel')
const Apmc = require('../models/apmcmodel')
const FirmData = require('../models/firmdataModel')
const pug = require('pug');
const app = express();
exports.listFirms = async(req,res) =>{
    const fid = req.query.apmcid;
    const firms =await Firm.find({});
    console.log(firms);
    res.render('firm/firms',{firms:firms})
    //res.send(fid);
    //console.log(fid);*/
}

const mongoose = require("mongoose");

// Assuming models are already defined
// Assuming Mongoose models

async function populateFirmRep(apid) {
  try {
    // 1. Get all firms
    
    const firms = await Firm.find({apmcid:apid});

    for (const firm of firms) {
      // 2. Get qty values for onion, potato, garlic
      const onionData = await FirmData.findOne({ firmid: firm.firmid, prod: "onion" });
      const potatoData = await FirmData.findOne({ firmid: firm.firmid, prod: "potato" });
      const garlicData = await FirmData.findOne({ firmid: firm.firmid, prod: "garlic" });

      const onionQty = onionData ? onionData.Qty : 0;
      const potatoQty = potatoData ? potatoData.Qty : 0;
      const garlicQty = garlicData ? garlicData.Qty : 0;

      // 3. Upsert into firmrep (insert or update if already exists)
       rep = new FirmRep({
          apmcid:firm.apmcid,
                firmid:firm.firmid,
                firmname:firm.firmname,
                onion:onionData ? onionData.Qty:0,
                potato:potatoData ? potatoData.Qty:0,
                garlic:garlicData ? garlicData.Qty:0

       });

       FirmRep.insertOne(rep);
    }

    //console.log(rep);
  } catch (err) {
    console.error("Error populating FirmRep:", err);
  }
}




/*function firmrep(apid) {
  //const fid = req.query.apmcid;
  try {
    // Get all Firms
      FirmRep.deleteMany({});
      const allapmc =  Apmc.find({});
            console.log({allapmc});
            return;
      for(const ap in allapmc){
          let apid = ap.apmcid;
          const allfirms = Firm.find({apid})
          for(const frm in allfirms){
            console.log({apid});
            return;
            const firmp =  FirmData.findOne({ firmid: frm.firmid, prod: "potato" });
            const firmo =  FirmData.findOne({ firmid: frm.firmid, prod: "onion" });
            const firmg =  FirmData.findOne({ firmid: frm.firmid, prod: "garlic" });

          rep = new FirmRep({
            apmcid:ap.apmcid,
                firmid:ap.firmid,
                firmname:ap.fname,
                onion:firmo ? firmo.Qty:0,
                potato:firmp ? firmp.Qty:0,
                garlic:firmg ? firmg.Qty:0,

          });
        
        //FirmRep.insertOne(rep);
          }
      }
    
      
      } catch (err) {
        console.error("Error in firmrep:", err);
      }
}*/

exports.showAddForm = async(req,res) =>{
     res.render('firm/addfirm');
}

exports.saveFirm = async (req, res) => {
  const { firmid,apmcid, prefix ,firmname } = req.body;
  await Firm.create({ firmid, apmcid,prefix, firmname });
  res.redirect('/firms');
}

exports.listFirmsrep = async(req,res) =>{
  const apid = req.query.apmcid
    await FirmRep.deleteMany({});
    await populateFirmRep(apid);
    const firmreps = await FirmRep.find({});
    res.render('firm/firmlist',{firmreps:firmreps})
    
}