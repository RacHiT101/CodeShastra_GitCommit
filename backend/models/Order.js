const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      default: () => Math.floor(100000 + Math.random() * 900000).toString(),
      unique: true,
    },
    user: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      username: {
        type: String,
        ref: "User",
      },
    },
    products: {
      type: Array,
      required: true,
      ref: "Cart",
    },
    amount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
    preorder: {
      type: Boolean,
      default: "false",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order",orderSchema)