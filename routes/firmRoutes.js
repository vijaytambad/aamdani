const express = require('express');
const router = express.Router();
const firmController = require('../controllers/firmController');

router.get('/firms',firmController.listFirms);
router.get('/firms/add',firmController.showAddForm);
router.post('/firms/save',firmController.saveFirm);
router.get('/firms/rep',firmController.listFirmsrep);

module.exports = router;