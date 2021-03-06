const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    // only sending some part of product
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.listen(5000, () => console.log(`Server is running on port 5000`));
