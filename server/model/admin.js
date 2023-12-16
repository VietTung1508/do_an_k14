const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Admin", adminSchema);
