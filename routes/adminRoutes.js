const express = require('express');
const router= express.Router();
const adminController = require('../controllers/adminController')

router.get('/admin',adminController.getLogin);
router.post('/api/admin/login',adminController.login);
module.exports=router;