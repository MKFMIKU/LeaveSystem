/**
 * Created by mikum on 2016/2/9.
 */

var express = require('express');
var app = express();

var admin = require('./router/admin');
var apply = require('./router/apply');

//Router
app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});
app.use(require('body-parser').urlencoded({extended: true}));
app.get('/admin', admin);
app.post('/apply', apply);
app.use(express.static('public'));

//Error deal
app.get("*", function (req, res) {
    res.status(500);
    res.end("404!");
});

//System Start!!!
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("LeaveSystem Work on %s : %s",host,port);
});