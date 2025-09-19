const { json } = require('body-parser');
const Apmc = require('../models/apmcmodel');
const ApmcData =require('../models/apmcdatamodel');
const pug = require('pug');
exports.listApmcs = async(req,res) =>{
    const apmcs =await Apmc.find();
    res.render('apmc/apmclist',{apmcs});
    //res.send(apmcs);
}

async function Updatetbl() {
  try {
    // Get all APMCs
    const apmcs = await Apmc.find({});

    for (const ap of apmcs) {
      // Find product data
      const apmo = await ApmcData.findOne({ apmcid: ap.apmcid, prod: "onion" });
      const apmp = await ApmcData.findOne({ apmcid: ap.apmcid, prod: "potato" });
      const apmg = await ApmcData.findOne({ apmcid: ap.apmcid, prod: "garlic" }); // typo fixed

      // Update the APMC doc with new quantities
      await Apmc.updateOne(
        { _id: ap._id },  // filter
        {
          $set: {
            onion: apmo ? apmo.Qty : 0,
            potato: apmp ? apmp.Qty : 0,
            garlic: apmg ? apmg.Qty : 0,
          },
        }
      );
    }
  } catch (err) {
    console.error("Error in Updatetbl:", err);
  }
}


exports.showTable = async (req, res) => {
    Updatetbl();
    const apmcs = await Apmc.find();
    //const data = await ApmcData.find({apmcid:apmcs.apmcid});

    // Build structure: { apmcid: { Onion: 0, Potato: 0, Garlic: 0 } }
    //const tableData = {};
    /*apmcs.forEach(apmc => {
      tableData[apmc.apmcid] = { 
        name: apmc.apmcname,
        addr: apmc.apmcadd,
        Onion:  ApmcData.find({apmcid:apmcs.apmcid,prod:"onion"}).Qty,
        Potato: ApmcData.find({apmcid:apmcs.apmcid,prod:"potato"}).Qty,
        Garlic: ApmcData.find({apmcid:apmcs.apmcid,prod:"garlic"}).Qty  
      }; 
        
    });*/
    res.render('apmc/apmcs',{apmcs:apmcs});
  }


exports.showAddForm = async(req,res) =>{
     res.render('apmc/addapmc');
}

exports.saveApmc = async (req, res) => {
  const { apmcid, apmcname, apmcadd } = req.body;
  await Apmc.create({ apmcid, apmcname, apmcadd });
  res.redirect('apmcslist');
}

exports.update = async (req, res) => {
  const { id } = req.params;
  const { apmcname, apmcadd } = req.body;
  await Apmc.findByIdAndUpdate(id, { apmcname, apmcadd });
  res.redirect("/apmc");
};