const express = require("express");
const app = express();
const morgan = require('morgan')
const { logger } = require("./middleware/logger");
const authorize = require("./middleware/authorize");

// our own custom middleware
app.use([logger, authorize]); // apply multiple middleware to all routes

// built-in middleware
app.use(express.static('./public'))

// third-party middlware
app.use(morgan('tiny'))

app.get("/", (req, res) => {
    console.log(req.user);
    res.send("Home");
});
app.get("/about", (req, res) => {
    console.log(req.user);
    res.send("About");
});
app.get("/api/products", (req, res) => {
    console.log(req.user);
    res.send("Products");
});
app.get("/api/items", (req, res) => {
    console.log(req.user);
    res.send("Items");
});

app.listen(5000, () => console.log(`Server is running on port 5000`));
