const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const Product = require("./models/Product");
const products = require("./data/products");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Purane products delete karega
    await Product.deleteMany();

    // Naye products insert karega
    await Product.insertMany(products);

    console.log("Products Imported Successfully");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();