const e = require('express');
const connectDatabase = require('../database/db');

function productGET(callback) {
  connectDatabase.connection.query(
    'SELECT * FROM product',
    function (err, result) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

function productGetController(req, res) {
  productGET(function (err, result) {
    if (err) {
      res.status(400).send({
        message: 'Something Went Wrong',
      });
    } else {
      res.status(200).send({
        status: 200,
        data: result,
        message: 'Successfully GET data Product',
      });
    }
  });
}

module.exports = {
  productGetController,
};
