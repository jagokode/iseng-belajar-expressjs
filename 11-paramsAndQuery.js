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

// params -> :productId (string), to get detail on single product
app.get("/api/products/:productId", (req, res) => {
  const singleProduct = products.find(
    (product) => product.id === Number(req.params.productId)
  );

  if (!singleProduct) {
    return res.status(404).send("Product not found");
  }

  res.json(singleProduct);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.json({ reviewId: req.params.reviewId, productId: req.params.productId });
  // res.send(`This is a review with id ${req.params.reviewId} on product with id ${req.params.productId}`);
});

// query string
// example: localhost:5000/api/v1/search?name=a&limit=2
app.get('/api/v1/search', (req, res) => {
  console.log(req.query);
  const { name, limit } = req.query
  let sortedProducts = [...products]
  if (name) {
    sortedProducts = sortedProducts.filter(prod => {
      return prod.name.startsWith(name)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  
  if (sortedProducts.length < 1) {
    // return res.status(200).send('No products mathced your search')
    return res.status(200).json({ success: true, data: []})
  }
  
  res.status(200).json({success: true, data: sortedProducts})
})

app.listen(5000, () => console.log(`Server is running on port 5000`));
