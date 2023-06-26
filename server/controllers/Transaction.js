const Order = require("../models/Orders");
const Client = require("../models/Client");
const Transaction = require("../models/Transaction");

exports.addNewTransaction = async (req, res) => {
  try {
    const { client, lotNo, defected, delivered } = req.body;
    if (!client || !lotNo) {
      return res.status(400).json({
        success: false,
        message: "All Fields are mandatory , Please Fill Carefully",
      });
    }

    //if (!defected) defected = 0;
    //if (!delivered) delivered = 0;

    const clientEntity = await Client.findOne({ firmName: client });
    const clientID = clientEntity._id;

    const orderEntity = await Order.findOne({ client: clientID, lotNo: lotNo });
    const orderID = orderEntity._id;

    const transactionDetails = await Transaction.create({
      client: clientID,
      order: orderID,
      defected: defected,
      delivered: delivered,
    });

    orderEntity.transactions.push(transactionDetails._id);
    await orderEntity.save();

    console.log("Transaction Details : ", transactionDetails);
    return res.status(200).json({
      success: true,
      message: "Transaction Occur  Successfully",
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Error while adding Transaction",
    });
  }
};
