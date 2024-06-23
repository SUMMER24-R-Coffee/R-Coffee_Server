const connection = require('../../config/connection');

const saveNotification = async (title, message, email_user, order_id) => {
    const query = 'INSERT INTO notification (title, message, email_user, order_id) VALUES (?, ?, ?, ?)';
    const values = [title, message, email_user, order_id];
    return await connection.queryDatabase(query, values);
};

const getNotificationsByEmail = async (email_user) => {
    const query = 'SELECT * FROM notification WHERE email_user = ? ORDER BY create_at DESC';
    return await connection.queryDatabase(query, [email_user]);
};

const markNotificationAsRead = async (notification_id) => {
    const query = 'UPDATE notification SET is_read = 1 WHERE notification_id = ?';
    return await connection.queryDatabase(query, [notification_id]);
};

module.exports = {
    saveNotification,
    getNotificationsByEmail,
    markNotificationAsRead
};
