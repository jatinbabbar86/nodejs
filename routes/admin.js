const express = require('express');
const router = express.Router();
const productcontroller = require('../controllers/products');

router.get('/add_product', productcontroller.add_product);
router.get('/list_product', productcontroller.get_list_product);
router.post('/list_product',productcontroller.post_list_products);

router.get('/product/:productId',productcontroller.get_product);



module.exports = router;