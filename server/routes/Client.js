const express = require('express')
const router = express.Router()


const {createClient} = require('../controllers/Client');

router.post("/createClient", createClient);

module.exports = router;