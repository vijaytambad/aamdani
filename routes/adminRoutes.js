const express = require('express');
const router= express.Router();
const adminController = require('../controllers/adminController')

router.get('/',adminController.getLogin);
router.post('/admin/login',adminController.login);

module.exports=router;