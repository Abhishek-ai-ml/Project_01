const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    lotNo: {
      type: String,
      ref: "lotNo",
    },
    item: {
      type: String,
      required: true,
    },
    type: [
      {
        type: String,
      },
    ],
    rate: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    defected: {
      type: Number,
      default: 0,
    },
    delivered: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processed"],
      default: "pending",
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
