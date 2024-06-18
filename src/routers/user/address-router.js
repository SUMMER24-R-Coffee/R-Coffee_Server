const express = require('express');
const router = express.Router();

const addressController = require('../../controllers/user/address-controller');

router.get('/api-app/addresses/:email_user', addressController.getAddress);
router.post('/api-app/insert-address', addressController.insertAddress);

module.exports = router;