const express = require("express");
const router = express.Router();

const { addNewTransaction } = require("../controllers/Transaction");

router.post("/addTransaction", addNewTransaction);

module.exports = router;
