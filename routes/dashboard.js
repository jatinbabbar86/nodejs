const express = require('express');
const router = express.Router();
const productcontroller = require('../controllers/products');

router.get('/dashboard', productcontroller.dashboard_home);

module.exports = router;