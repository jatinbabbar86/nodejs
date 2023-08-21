// const express = require('express');
// const router = express.Router();

const path = require('path');
const rootdir = require('../utilities/path');
const products = [];

exports.home = (req, res) => {
    res.sendFile(path.join(rootdir, 'views', 'home.html'));
}
exports.dashboard_home = (req, res, next)=>{
    res.sendFile(path.join(rootdir, 'views', 'dashboard_admin.html'));
}
exports.add_product = (req, res, next)=>{
    console.log(products);
    res.sendFile(path.join(rootdir, 'views', 'add.html'));
}
exports.post_list_products = (req, res, next)=>{ 
    products.push({id: Object.keys(products).length + 1, title: req.body.product_name});
    res.sendFile(path.join(rootdir, 'views', 'list_products.html'));
}

exports.get_product = (req, res, next)=>{
    productId = req.params.productId;
    console.log(productId);
    res.sendFile(path.join(rootdir, 'views', 'product_detail.html'));
}


exports.get_list_product = (req, res, next)=>{
    res.redirect('/');
}

// module.exports = router;
// module.products = products;