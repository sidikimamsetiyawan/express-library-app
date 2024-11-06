const express = require('express')

const UsersController = require('../controller/users');

const router = express.Router();
router.get('/login', UsersController.loginUsers);
router.post('/register', UsersController.createNewUsers);

module.exports = router;

