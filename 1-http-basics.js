const http = require("http");

const server = http.createServer((req, res) => {
  console.log("user access ther server");
  return res.end("home page");
});

server.listen(5000, () => console.log(`Server is runnin on port 5000`));
