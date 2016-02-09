/**
 * Created by mikum on 2016/2/9.
 */

var express = require('express');
var app = express();

var admin = require('./router/admin');
var push = require('./router/push');

//Router
app.get('/', function (req, res, next) {
    res.sendFile(__dirname+'/public/index.html');
    next();
});
app.use(require('body-parser').urlencoded({extended: true}));
app.get('/admin', admin);
app.post('/push', push);
app.use(express.static('public'));

//Error deal
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("<h1>Something Wrong!!!</h1>");
    next();
});


//System Start!!!
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("LeaveSystem Work on %s : %s",host,port);
});