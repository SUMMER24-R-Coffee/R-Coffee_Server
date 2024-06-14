const express = require('express');
const router =express.Router();

const productController = require('../../controllers/user/product-controller')

router.get('/api-app/products/:email_user', productController.getProducts)

module.exports = router;