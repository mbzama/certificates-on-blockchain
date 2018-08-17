var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '52.172.13.43',
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

