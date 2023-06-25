const Order = require("../models/Orders");

exports.addNewOrder = async (req, res) => {
  try {
    const { client, lotNo, item, type, rate, quantity } = req.body;
    if (!client || !lotNo || !item || !type || !rate || !quantity) {
      return res.status(400).json({
        success: false,
        message: "All Fields are mandatory , Please Fill Carefully",
      });
    }
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Error while Creating Client",
    });
  }
};
