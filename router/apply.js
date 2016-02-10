/**
 * Created by mikum on 2016/2/9.
 */

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../logic/config');

//Use mysql pool to solve too much connections
var pool = mysql.createPool(config.mysql);

router.post('/apply', function (req, res) {
    console.log([req.body.name,req.body.number_id,req.body.class_id,req.body.reason,req.body.cost,req.body.address]);
    pool.getConnection(function (err, connection) {
        if(err) throw err;
        var post = {
            name: req.body.name,
            number_id: req.body.number_id,
            class_id: req.body.class_id,
            why: req.body.reason,
            cost: req.body.cost,
            address: req.body.address
        };
        connection.query('INSERT INTO request SET ?', post, function (err, result) {
                if(err){
                    console.log(err);
                }
                else{
                    console.log(result);
                    res.end("OK");
                }
            });
        connection.release();
    });
});

module.exports = router;