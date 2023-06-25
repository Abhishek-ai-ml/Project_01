const Order = require("../models/Orders");
const Client = require('../models/Client')

exports.addNewOrder = async (req, res) => {
  try {
    const { client, lotNo, item, type, rate, quantity } = req.body;
    if (!client || !lotNo || !item || !type || !rate || !quantity) {
      return res.status(400).json({
        success: false,
        message: "All Fields are mandatory , Please Fill Carefully",
      });
    }

    //let data = await Order.create(order);
    const clientEntity = await Client.findOne({ firmName: client });
    const clientID = clientEntity._id;
    //await client.save();

    const orderDetails = await Order.create({
      client: clientID,
      lotNo: lotNo,
      item: item,
      type: type,
      rate: rate,
      quantity: quantity,
      totalAmount: quantity * rate,
    });

    clientEntity.orders.push(orderDetails._id);
    await clientEntity.save();

    console.log("Order Details : ", orderDetails);
    return res.status(200).json({
      success: true,
      message: "Order Placed Successfully",
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Error while Creating Client",
    });
  }
};
