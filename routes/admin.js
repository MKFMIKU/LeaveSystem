var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  if(!req.cookies.auth) {
    console.log(req.cookies.user);
    res.redirect('/login');
  }
  else{
    res.render('dashboard');
  }
});

module.exports = router;