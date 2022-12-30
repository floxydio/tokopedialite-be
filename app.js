const express = require('express');
const connectDatabase = require('./database/db');
const productController = require('./controller/product.handler');
const app = express();
const port = 2500;
const categoryController = require('./controller/category');

app.get('/', function (req, res) {
  res.send('Implement Me');
});

app.get('/product', productController.productGetController);
app.get('/api/category', categoryController.categoryGET);

app.listen(port, function () {
  console.log(`Server Running ON --> ${port}`);
});
