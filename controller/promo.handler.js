const e = require('express');
const connectDatabase = require('../database/db');

function promoGET(req, res) {
    connectDatabase.connection.query(
      `SELECT * FROM promo`,
      function (err, result) {
        if (err) {
          res.status(400).send({
            message: 'Something Went Wrong',
          });
        } else {
          res.status(200).send({
            status: 200,
            data: result,
            message: 'Successfully GET Promo',
          });
        }
      }
    );
  }

module.exports = {
    promoGET,
};