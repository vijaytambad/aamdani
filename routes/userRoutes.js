const express = require('express');
const router = express.Router();
const userController = require('../contollers/userController');

router.get('/user',userController.listUsers);
router.get('/user/add',userController.showAddForm);
router.post('/user/save',userController.saveUser);

module.exports = router;

