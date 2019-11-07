// require('dotenv').config();
var express = require('express');

var bodyParser = require('body-parser');
var Mongoose = require('mongoose');
Mongoose.connect("mongodb://localhost/dbProducts",{ useUnifiedTopology: true,  useNewUrlParser: true    } );
var productRoute = require('./routes/product.route');
var Product = require('./models/product.model');

// var apiProductRoute = require('./api/routes/product.route');

var port = 3000;

var app = express();

app.set('view engine', 'pug');

app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/',async function(req, res) {
	var products = await Product.paginate({}, { page: 1, limit: 30 });
  res.render('products/index', {
    products: products.docs
  });
});
app.use('/products', productRoute);

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
