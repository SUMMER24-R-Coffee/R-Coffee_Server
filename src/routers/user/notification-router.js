const express = require('express');
const router = express.Router();
const NotificationController = require('../../controllers/user/notification-controller');

router.get('/api-app/notifications/:email_user', NotificationController.getNotifications);
router.put('/api-app/notification/:notification_id/read', NotificationController.markAsRead);
router.delete('/api-app/notification/:notification_id/delete', NotificationController.deleteNotification)
router.get('/api-app/unread/:email_user', NotificationController.countUnreadNotification)

module.exports = router;
