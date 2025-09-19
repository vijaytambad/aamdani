const express = require('express');
const router = express.Router();
const apmcController = require('../controllers/apmcController');

router.get('/', apmcController.showTable);
router.get('/apmc',apmcController.listApmcs);
router.get('/apmc/add',apmcController.showAddForm);
router.post('/apmc/save',apmcController.saveApmc);
router.post("/apmc/update/:id", apmcController.update);

module.exports = router;
