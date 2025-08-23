const express = require('express');
const router = express.Router();
const firmController = require('../contollers/firmController');

router.get('/firm',firmController.listFirms);

module.exports = router;