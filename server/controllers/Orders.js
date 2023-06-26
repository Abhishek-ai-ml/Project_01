const Order = require("../models/Orders");
const Client = require("../models/Client");

exports.addNewOrder = async (req, res) => {
  try {
    const { client, lotNo, item, type, rate, quantity } = req.body;
    if (!client || !lotNo || !item || !type || !rate || !quantity) {
      return res.status(400).json({
        success: false,
        message: "All Fields are mandatory , Please Fill Carefully",
      });
    }

    const clientEntity = await Client.findOne({ firmName: client });
    const clientID = clientEntity._id;

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


exports.getAllTransaction = async(req, res) => {
  try {
    //Fetch data from req body
    const {firmName, lotNo} = req.body;

    //Validation
    if(!firmName || !lotNo) {
      return res.status(401).json({
        success:false,
        message:"Fill all fields carefully",
      }) 
    }

    const clientEntity = await Client.findOne({firmName:firmName});

    const orderEntity = await Order.find({client:clientEntity._id, lotNo:lotNo}).populate("transactions").exec();

    if(!orderEntity.length) {
      return res.status(404).json({
        success:false,
        message:"No Transactions found for particular details",
      })
    }

    return res.status(200).json({
      success:true,
      message:"Transactions details fetch successfully",
      orderEntity,
    })

  }catch(error) {
    return res.status(500).json({
      success:false,
      message:"Internal Error while fetching transaction details",
    })
  }
}
