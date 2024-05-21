const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/practice").then(() => {
  console.log("Connected to DB!");
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "GET received!",
  });
});

app.post("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "POST recevied!",
    data: req.body,
  });
});

app.listen(8000, () => {
  console.log("Listening to port 8000...");
});
