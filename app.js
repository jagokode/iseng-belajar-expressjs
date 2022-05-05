const express = require("express");
const path = require("path");
const app = express();

// setup static assets. biasanya folder 'public'. sebenarnya bebas foldernya dinamakan apa aja
app.use(express.static("./navbar-app"));

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(5000, () => console.log(`Server is running on port 5000`));
