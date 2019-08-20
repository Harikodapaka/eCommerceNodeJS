var express = require('express');
var router = express.Router();
var productModel = require('../schemas/product');
/* GET users listing. */
router.get('/getProducts', async function(req, res, next) {
  let searchResult = await productModel.find({});
  res.send({ 'products': searchResult });
});

module.exports = router;
