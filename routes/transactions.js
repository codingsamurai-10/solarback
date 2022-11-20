var express = require('express');
var router = express.Router();
const transactionsController = require("../controller/transactions");

router.get('/buy', transactionsController.buyOrder);

router.get('/sell', transactionsController.sellOrder);

module.exports = router;
