const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Node API");
});

app.listen(3000, () => {
  console.log("APP is running in port 3000");
});