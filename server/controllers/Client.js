const Client = require("../models/Client");
const Transaction = require("../models/Transaction");

//Additon of new client

exports.createClient = async (req, res) => {
  try {
    const { firmName, OwnerName, address } = req.body;

    if (!firmName || !OwnerName || !address) {
      return res.status(400).json({
        success: false,
        message: "All Fields are mandatory , Please Fill Carefully",
      });
    }

    const clientDetails = await Client.create({
      firmName: firmName,
      OwnerName: OwnerName,
      address: address,
    });

    console.log("Details of Client are", clientDetails);
    return res.status(200).json({
      success: true,
      message: "Client Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Error while Creating Client",
    });
  }
};

//Function for fetching all orders of client
exports.getAllOrders = async (req, res) => {
  try {
    //Fetch data from req
    const { firmName } = req.body;

    //Validation
    if (!firmName) {
      return res.status(400).json({
        success: false,
        message: "Please Select Firm ",
      });
    }

    //Fetch firm from DB
    const ordersDetail = await Client.findOne({ firmName: firmName })
      .populate("orders")
      .exec();

    if (!ordersDetail) {
      return res.status(401).json({
        success: false,
        message: "No Order found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Orders fetch successfully",
      ordersDetail,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Error",
    });
  }
};

// function for fetching all deliveries of a client
exports.getAllTransactions = async (req, res) => {
  try {
    //Fetch data from req
    const { firmName } = req.body;

    //Validation
    if (!firmName) {
      return res.status(400).json({
        success: false,
        message: "Please Select Firm ",
      });
    }

    const clientEntity = await Client.findOne({ firmName: firmName });

    const transactionDetails = await Transaction.find({
      client: clientEntity._id,
    });

    if (!transactionDetails) {
      return res.status(401).json({
        success: false,
        message: "No Transaction found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Orders fetch successfully",
      transactionDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Error",
    });
  }
};
