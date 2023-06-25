const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    firmName: {
      type: String,
      required: true,
      unique: true,
    },
    OwnerName: {
      type: String,
    },
    // address: [
    //   {
    //     street: String,
    //     city: String,
    //     state: String,
    //     zip: String,
    //   },
    // ],
    address:{
      type:String,
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
