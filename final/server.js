const express = require("express");
const app = express();

const peopleRoute = require("./routers/peopleRoute");
const authRoute = require("./routers/authRoute");

app.use(express.json()); // parse json
app.use(express.urlencoded({ extended: false })); // parse form data
app.use(express.static("../public"));

// routes
app.use("/api/people", peopleRoute);
app.use("/auth", authRoute);

app.listen(5000, () => console.log("Server is running on port 5000"));
