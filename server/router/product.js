const express = require("express");
const route = express.Router();
const product = require("../controllers/product.js");
const multer = require("multer");
const { storage } = require("../cloudinary/index.js");
const upload = multer({ storage });

route.get("/products", product.getProducts);
route.get("/product/:id", product.detail);
route.post("/create", upload.single("image"), product.createProduct);
route.post("/search/:q", product.search);
route.put("/:id", product.editProduct);
route.delete("/:id", product.deleteProduct);

module.exports = route;
