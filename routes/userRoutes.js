const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/',userController.listUsers);
router.get('/user/add',userController.showAddForm);
router.post('/user/save',userController.saveUser);
router.get('/admin',userController.login);

module.exports = router;


