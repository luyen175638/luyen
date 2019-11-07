var Product = require('../models/product.model');
var mongoosePaginate = require('mongoose-paginate');

module.exports.index = async function(req, res) {
  var page = parseInt(req.query.page) || 1; // n
  var products = await Product.paginate({}, { page: page, limit: 10 });
  res.render('products/index', {
    products: products.docs
	});
};
