const express = require("express");
const app = express();
const fs = require("fs");
const port = 8080;

app.get("/", (req, res) => {
  html = fs.readFileSync("index.html");
  res.writeHead(200);
  res.write(html);
  res.end();
});

// New code
app.get("/test", (req, res) => {
  res.send("the REST endpoint test run!");
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
