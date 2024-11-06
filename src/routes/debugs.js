const express = require('express');

const DebugsController = require('../controller/debugs');

const router = express.Router();

// READ - GET

router.post('/', DebugsController.compareDeep);

module.exports = router;