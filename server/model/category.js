const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = mongoose.Schema({});

module.exports = mongoose.model("category", categorySchema);
