const express = require("express");
const route = express.Router();
const auth = require("../controllers/auth.js");

route.get("/users", auth.getUsers);

route.post("/register", auth.register);

route.post("/login", auth.login);

route.put("/editAdmin/:id", auth.editProfileAdmin);

route.post("/adminLogin", auth.adminLogin);

module.exports = route;
