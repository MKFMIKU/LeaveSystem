/**
 * Created by mikum on 2016/2/13.
 */

var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var config = require('../logic/config');

router.get('/', function (req, res, next) {
    res.render('login');
});

router.post('/', function (req, res) {
    var user = req.body.user;
    var pass = req.body.pass;
    // console.log(user);
    var connection = mysql.createConnection(config.mysql);
    connection.query('SELECT * FROM `users` WHERE `username` = ?', user, function(err, results, fields) {
        if(err) throw err;
            if(results[0].password==pass){
                res.cookie('user',user,{ maxAge: 20000,httpOnly:true, path:'/'});
                res.cookie('auth',1,{ maxAge: 20000,httpOnly:true, path:'/'});
                res.send('1');
            }
            else {
                res.send("wa");
            }
    });
});

module.exports = router;