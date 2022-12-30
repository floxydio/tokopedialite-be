const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tokopedia'
})

connection.connect(function (err){
    if(err) console.log(err)

    console.log("Database Connected")
})

module.exports = {
    connection
}