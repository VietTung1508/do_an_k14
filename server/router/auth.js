const express = require("express");
const route = express.Router();
const auth = require("../controllers/auth.js");

route.post("/register", auth.register);

route.get("/login", auth.login);

route.post("/editAdmin/:id", auth.editProfileAdmin);

route.post("/adminLogin", auth.adminLogin);

module.exports = route;
