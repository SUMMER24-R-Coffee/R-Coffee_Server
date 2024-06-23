const NotificationModel = require("../../models/user/notification-model");

const getNotifications = async (req, res) => {
    const { email_user } = req.params;
    try {
        const notifications = await NotificationModel.getNotificationsByEmail(email_user);
        res.status(200).json(notifications);
    } catch (err) {
        console.error('Error fetching notifications:', err);
        res.status(500).send('Server error');
    }
};

const markAsRead = async (req, res) => {
    const { notification_id } = req.params;
    try {
        await NotificationModel.markNotificationAsRead(notification_id);
        res.status(200).send('Notification marked as read');
    } catch (err) {
        console.error('Error marking notification as read:', err);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getNotifications,
    markAsRead
};
