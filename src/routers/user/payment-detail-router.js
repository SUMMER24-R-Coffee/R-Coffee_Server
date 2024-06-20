const express = require('express');
const router = express.Router();

const paymentController = require('../../controllers/user/payment-detail-controller');

router.post('/api-app/insert-payment-detail', paymentController.insertPaymentDetail);

module.exports = router;