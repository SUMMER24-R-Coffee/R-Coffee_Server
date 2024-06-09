const express = require('express');
const router =express.Router();

const productController = require('../../controllers/user/product-controller')

router.get('/api-app/products', productController.getProducts)

module.exports = router;