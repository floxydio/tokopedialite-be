const express = require("express");
const app = express();
const port = 2500;

app.get("/", function (req, res) {
  res.send("Implement Me");
});

app.listen(port, function () {
  console.log(`Server Running ON --> ${port}`);
});
