const connectDatabase = require('../database/db');

function productGET(req, res) {
  connectDatabase.connection.query(
    `SELECT * FROM product`,
    function (err, result) {
      if (err) {
        res.status(400).send({
          message: 'Something Went Wrong',
        });
      } else {
        res.status(200).send({
          status: 200,
          data: result,
          message: 'Successfully GET Product',
        });
      }
    }
  );
}

function productPOST(req, res) {
  connectDatabase.connection.query(
    `INSERT INTO product (gambar, nama, harga, penjual, lokasi_penjual, rating, kategori) 
    VALUES ('${req.body.gambar}', '${req.body.nama}', '${req.body.harga}', '${req.body.penjual}', '${req.body.lokasi_penjual}', '${req.body.rating}', '${req.body.kategori}')`,
    function (err, result) {
      if (err) {
        res.status(400).send({
          message: err,
        });
      } else {
        res.status(201).send({
          message: 'Successfully Add Product',
        });
      }
    }
  );
}

function productSearchingById(req, res) {
  connectDatabase.connection.query(
    `SELECT * FROM product WHERE id = ${req.params.id}`,
    function (err, result) {
      if (err) {
        res.status(400).send({
          message: err,
        });
      } else {
        res.status(200).send({
          data: result,
          message: 'Product Found',
        });
      }
    }
  );
}

function productSearchingName(req, res) {
  console.log(req.params.search);
  connectDatabase.connection.query(
    `SELECT * FROM product WHERE nama LIKE '%${req.params.search}%'`,
    function (err, result) {
      console.log(result);
      if (err) {
        return res.status(400).send({
          message: err,
        });
      } else {
        return res.status(200).send({
          data: result,
          message: 'Data Search',
        });
      }
    }
  );
}
module.exports = {
  productSearchingName,
  productSearchingById,
  productGET,
  productPOST,
};
