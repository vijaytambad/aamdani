const express = require('express');
const router= express.Router();
const adminController = require('../controllers/adminController')

router.get('/',adminController.getLogin);
router.post('/login',adminController.postLogin);

module.exports=router;