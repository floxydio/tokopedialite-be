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

  function promoPOST(req, res) {
    connectDatabase.connection.query(
      `INSERT INTO promo (nama, kode, status) VALUES ('${req.body.nama}', '${req.body.kode}', '${req.body.status}')`,
      function (err, result) {
        if (err) {res.status(400).send({
          message : err,
        });
      } else {
        res.status(201).send({
          message : 'Succesfully add Promo'
        });
      }
      }
    );
  }
  

module.exports = {
    promoGET,
    promoPOST,
};