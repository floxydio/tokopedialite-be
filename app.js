const express = require('express');
const connectDatabase = require('./database/db');
const productController = require('./controller/product.handler');
const app = express();
const port = 2500;
const categoryController = require('./controller/category');
const bodyparser = require('body-parser');
const cors = require('cors');

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.get('/', function (req, res) {
  res.send('Implement Me');
});

app.get('/product/search/:search', productController.productSearching);
app.get('/api-product', productController.productGET);
app.get('/api/category', categoryController.categoryGET);

app.post('/api-create-product', productController.productPOST);

app.listen(port, function () {
  console.log(`Server Running ON --> ${port}`);
});
