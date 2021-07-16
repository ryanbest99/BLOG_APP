const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// Mongoose Connect
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

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
