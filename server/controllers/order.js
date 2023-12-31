const Order = require("../model/order");

const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({});
    res.status(500).json(orders);
  } catch (e) {
    res.status(404).json(e);
  }
};

module.exports = { getOrders };
