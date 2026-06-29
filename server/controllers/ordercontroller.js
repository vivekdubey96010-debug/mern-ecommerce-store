const Order = require("../models/Order");

// Place Order
const placeOrder = async (req, res) => {
  try {
    const {
      user,
      items,
      totalPrice,
      shippingAddress,
      paymentMethod,
    } = req.body;

    const order = await Order.create({
      user,
      items,
      totalPrice,
      shippingAddress,
      paymentMethod,
    });

    res.status(201).json({
      message: "Order Placed Successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Orders
const getOrders = async (req, res) => {
  try {
    const { user } = req.query;

    let orders;

    if (user) {
      orders = await Order.find({ user }).sort({
        createdAt: -1,
      });
    } else {
      orders = await Order.find().sort({
        createdAt: -1,
      });
    }

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  placeOrder,
  getOrders,
};