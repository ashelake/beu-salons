const express = require("express");
const { connection } = require("./config/db");
const ProductRouter = require("./routes/product.routes");
require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/", ProductRouter);
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Listning to port${process.env.PORT}`);
  } catch (error) {
    console.log("Error while connecting Database");
  }
});
