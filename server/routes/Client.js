const express = require('express')
const router = express.Router()


const {createClient, getAllOrders} = require('../controllers/Client');

router.post("/createClient", createClient);
router.get("/getAllOrders", getAllOrders);

module.exports = router;