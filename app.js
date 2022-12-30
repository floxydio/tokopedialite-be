const express = require("express");
const app = express();
const port = 2500;
const categoryController = require("./controller/category")

app.get("/", function (req, res) {
  res.send("Implement Me");
});

app.get("/category", categoryController.categoryGET)

app.listen(port, function () {
  console.log(`Server Running ON --> ${port}`);
});
