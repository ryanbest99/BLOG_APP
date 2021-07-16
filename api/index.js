const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About World");
});

const PORT = 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
