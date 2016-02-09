/**
 * Created by mikum on 2016/2/9.
 */

var config = require('./config');
var mysql = require('mysql');

//Use mysql pool to solve too much connections
var pool = mysql.createPool(config.mysql);

pool.getConnection(function (err, connection) {
    if(err) throw err;
    connection.release();
    console.log("Connect OK!");
});
