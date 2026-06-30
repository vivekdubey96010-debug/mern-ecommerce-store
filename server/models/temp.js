const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    items: [
      {
        name: String,
        image: String,
        price: Number,
        quantity: Number,
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
    },

    shippingAddress: {
      fullName: String,
      phone: String,
      address: String,
      city: String,
      pincode: String,
    },

    paymentMethod: {
      type: String,
      default: "Cash On Delivery",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);