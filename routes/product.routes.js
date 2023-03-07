const express = require("express");
const Product = require("../model/product.model");

const ProductRouter = express.Router();

ProductRouter.post("/post", async (req, res) => {
  const addData = req.body;
  console.log(addData);
  const checkProduct = await Product.findOne({ productId: addData.productId });
  if (!checkProduct) {
    const data = await Product.insertMany(addData);
    res.send({
      success: true,
      data: data,
    });
  } else {
    const quantity = Number(req.body.quantity);
    console.log(quantity);
    const data = await Product.findOneAndUpdate(
      { productId: addData.productId },
      { quantity: addData.quantity }
    );
    res.send({
      success: true,
      data: data,
    });
  }
});

ProductRouter.patch("/update/:id", async (req, res) => {
  const Id = req.params.id;
  const quantity = Number(req.body.quantity);
  console.log(Id, quantity);
  const data = await Product.findByIdAndUpdate(
    { _id: Id },
    { quantity: quantity }
  );

  res.send({
    success: true,
    message: "Quantity Update",
  });
});
module.exports = ProductRouter;
