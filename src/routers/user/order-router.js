const express = require('express');
const router = express.Router();

const orderController = require('../../controllers/user/order-controller');

router.get('/api-app/get-orders/:email_user', orderController.getOrder);
router.post('/api-app/insert-order', orderController.createOrder);
router.put('/api-app/update-status-order/:order_id', orderController.updateStatusOrder)

module.exports = router;