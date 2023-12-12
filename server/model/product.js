const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productScheme = mongoose.Schema({});

module.exports = mongoose.model("product", productScheme);
