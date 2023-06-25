const express = require('express')
const router = express.Router()

const {addNewOrder} = require('../controllers/Orders');

router.post("/addOrder", addNewOrder);

module.exports = router;