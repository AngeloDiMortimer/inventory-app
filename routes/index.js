var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Inventory App!'});
});

module.exports = router;

//work on categoryController and itemController functions