const express = require('express');
const router = express.Router();
const apmcController = require('../contollers/apmcController');

router.get('/apmc',apmcController.listApmcs);
router.get('/apmc/apmcs',apmcController.listApmcs);
router.get('/apmc/add',apmcController.showAddForm);
router.post('/apmc/save',apmcController.saveApmc);

module.exports = router;
