/**
 * Created by mikum on 2016/2/9.
 */

var express = require('express');
var router = express.Router();

router.post('/push', function (req, res) {
    console.log("Test %s : %s",req.body.name,req.body.number);
    res.status(200).send("OK");
});

module.exports = router;