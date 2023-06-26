const express = require('express')
const router = express.Router()

const {addNewOrder, getAllTransaction} = require('../controllers/Orders');

router.post("/addOrder", addNewOrder);
router.get("/getAllTransactions", getAllTransaction);

module.exports = router;