const Client = require("../models/Client");

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

//Function for fetching all transaction of client
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
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Error",
    });
  }
};
