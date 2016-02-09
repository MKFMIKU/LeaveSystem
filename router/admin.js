/**
 * Created by mikum on 2016/2/9.
 */

var express = require('express');
var router = express.Router();

router.get('/admin', function (req, res) {
    res.send("admin");
});

module.exports = router;