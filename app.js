/**
 * Created by mikum on 2016/2/9.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Work");
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("LeaveSystem Work on %s : %s",host,port);
});