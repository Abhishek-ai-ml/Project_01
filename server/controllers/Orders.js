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
    
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Error while Creating Client",
    });
  }
};
