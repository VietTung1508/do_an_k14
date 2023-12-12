const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({});

module.exports = mongoose.model("user", userSchema);
