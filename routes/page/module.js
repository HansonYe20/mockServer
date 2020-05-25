var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('module', { 
    title: '模块页面'
  });
});

module.exports = router;