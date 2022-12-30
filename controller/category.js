const databaseController = require("../database/db")

function categoryGET(req,res) {
  databaseController.connection.query("SELECT * FROM kategori", function (err, rows) {
    if(err) {
      return res.status(400).send({
        message : err
      })
    } else {
      return res.status(200).send({
        data : rows,
        message : "Succesfully get category"
      })
    }
  })
}


module.exports = {
  categoryGET
}