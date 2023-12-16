const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema(
  {
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    user: { type: Schema.Types.ObjectId, ref: "User" },
    payment: { type: String },
    total: { type: Number },
  },
  {
    timestams: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
