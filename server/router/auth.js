const express = require("express");
const route = express.Router();
const auth = require("../controllers/auth.js");

route.post("/register", auth.register);

route.get("/login", auth.login);

module.exports = route;
