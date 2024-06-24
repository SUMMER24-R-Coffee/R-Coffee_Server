const NotificationModel = require("../../models/user/notification-model");

class notificationController{
    async getNotifications(req, res) {
        const { email_user } = req.params;
        try {
            const notifications = await NotificationModel.getNotificationsByEmail(email_user);
            res.status(200).json(notifications);
        } catch (err) {
            console.error('Error fetching notifications:', err);
            res.status(500).send('Server error');
        }
    };
    
    async markAsRead (req, res){
        const { notification_id } = req.params;
        try {
            await NotificationModel.markNotificationAsRead(notification_id);
            res.status(200).send('Notification marked as read');
        } catch (err) {
            console.error('Error marking notification as read:', err);
            res.status(500).send('Server error');
        }
    };

    async deleteNotification(req, res){
        const { notification_id } = req.params;
        try {
            await NotificationModel.deleteNotification(notification_id);
            res.status(202).send('Notification deleted');
        } catch (err) {
            console.error('Error marking delete notification:', err);
            res.status(505).send('Server error');
        }
    }

    async countUnreadNotification(req, res){
        const {email_user}=req.params
        try {
            const result = await NotificationModel.countNumberUnRead(email_user);
            res.status(202).send(result);
        } catch (err) {
            console.error('Error count notification:', err);
            res.status(505).send('Server error');
        }

    }
    

}

module.exports = new notificationController()
