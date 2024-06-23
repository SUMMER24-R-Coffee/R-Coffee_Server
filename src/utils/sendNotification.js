const admin = require('firebase-admin');
const serviceAccount = require('../config/r-coffee-ee438-firebase-adminsdk-uqxpw-1b12ac76bd.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function sendNotification(token, title, body) {
  try {
    const message = {
      notification: {
        title: title,
        body: body
      },
      token: token
    };

    const response = await admin.messaging().send(message);
    console.log('Successfully sent message:', response);
    return response;
  } catch (error) {
    console.error('Error sending message:', error);

    if (error.code === 'messaging/invalid-registration-token') {
      throw new Error('Invalid FCM registration token');
    }

    throw error;
  }
}

module.exports = sendNotification;
