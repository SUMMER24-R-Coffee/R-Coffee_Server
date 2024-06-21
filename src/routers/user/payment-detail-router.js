const express = require('express');
const router = express.Router();

const paymentController = require('../../controllers/user/payment-detail-controller');

router.post('/api-app/insert-payment-detail', paymentController.insertPaymentDetail);
router.put('/api-app/update-payment/:order_id', paymentController.updatePaymentDetail)

module.exports = router;