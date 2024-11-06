const express = require('express');

const TransactionsController = require('../controller/transactions');

const router = express.Router();

// READ - GET
router.post('/', TransactionsController.createNewTransactions);

module.exports = router;