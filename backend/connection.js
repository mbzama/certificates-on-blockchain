var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.99.100',
    user     : 'root',
    password : 'root',
    database : 'certificates'
});

connection.connect(function(err) {
    if (err) throw err;
    else 
    console.log("success");
});

module.exports = connection;

