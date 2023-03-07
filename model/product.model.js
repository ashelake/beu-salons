
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productId: Number,
  quantity: Number,
  operation: String,
});

const Product = mongoose.model("data", ProductSchema);

module.exports = Product;
