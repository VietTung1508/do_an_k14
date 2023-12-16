const Product = require("../model/product");

const getProducts = async (req, res, next) => {
  const { page } = req.query;
  try {
    const products = await Product.find({})
      .limit(15)
      .skip(15 * page);
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json(e);
  }
};

const createProduct = async (req, res, next) => {
  const product = req.body;

  try {
    if (!req.file) {
      res.status(500).json({ msg: "Cannot create post without Image" });
    }

    const img = {
      url: req.file.path,
      filename: req.file.filename,
    };

    const newProduct = new Product({
      ...product,
      image: img,
    });

    await newProduct.save();
    res.status(200).json("Create Product Successfully");
  } catch (e) {
    res.status(500).json(e);
  }
};

const search = async (req, res, next) => {
  const { q } = req.params;

  try {
    const products = await Product.find({ title: new RegExp(q, "i") }).limit(
      10
    );

    res.status(200).json(products);
  } catch (e) {
    res.status(500).json(e);
  }
};

const detail = async (req, res, next) => {
  const { id } = req.params;

  try {
    const productDetail = await Product.findById(id);

    res.status(200).json(productDetail);
  } catch (e) {
    res.status(500).json(e);
  }
};

const editProduct = async (req, res, next) => {
  const { id } = req.params;
  const newProduct = req.body;
  try {
    await Product.findByIdAndEdit(id, newProduct);

    res.status(200).json("Upadate Product Successfully");
  } catch (e) {
    res.status(500).json(e);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);

    res.status(200).json("Delete Product Successfully");
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  getProducts,
  createProduct,
  editProduct,
  deleteProduct,
  search,
  detail,
};
