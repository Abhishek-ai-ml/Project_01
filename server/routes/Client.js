const express = require("express");
const router = express.Router();

const {
  createClient,
  getAllOrders,
  getAllTransactions,
} = require("../controllers/Client");

router.post("/createClient", createClient);
router.get("/getAllOrders", getAllOrders);
router.get("/getAllTransactions", getAllTransactions);

module.exports = router;
