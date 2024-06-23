const express = require('express');
const router = express.Router();
const NotificationController = require('../../controllers/user/notification-controller');

router.get('/notifications/:email_user', NotificationController.getNotifications);
router.put('/notification/:notification_id/read', NotificationController.markAsRead);

module.exports = router;
