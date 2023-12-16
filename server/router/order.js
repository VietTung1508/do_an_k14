const express = require("express");
const route = express.Router();
const order = require("../controllers/order.js");

route.get("/orders", order.getOrders);

module.exports = route;
