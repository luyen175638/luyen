var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var productSchema  = new mongoose.Schema({
	numberphone: String,
	gia: String,
	tong: String,
	mang: String,
	dang: String
});
productSchema.plugin(mongoosePaginate);

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;