const express = require('express');

const BooksController = require('../controller/books');

const router = express.Router();

// READ - GET
router.get('/', BooksController.getBooksStatus);

module.exports = router;