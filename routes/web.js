var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET about page. */
router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Express' });
});
module.exports = router;
