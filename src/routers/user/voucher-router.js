const express = require('express');
const router = express.Router();

const voucherController = require('../../controllers/user/voucher-controller');

router.get('/api-app/vouchers', voucherController.getVouchers);

module.exports = router;