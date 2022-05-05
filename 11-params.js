const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

// params -> :productId (string)
app.get("/api/products/:productId", (req, res) => {
  const singleProduct = products.find(
    (product) => product.id === Number(req.params.productId)
  );

  if (!singleProduct) {
    return res.status(404).send("Product not found");
  }

  res.json(singleProduct);
});

app.get("/api/products/:productId/reviews/:reviedId", (req, res) => {
  console.log(req.params);
  res.send("this is a review");
});

app.listen(5000, () => console.log(`Server is running on port 5000`));
