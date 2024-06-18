const express = require('express');
const router = express.Router();

const orderController = require('../../controllers/user/order-controller');

router.post('/api-app/insert-order', orderController.createOrder);

module.exports = router;