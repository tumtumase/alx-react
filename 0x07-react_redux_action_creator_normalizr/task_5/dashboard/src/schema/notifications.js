import { schema, normalize } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Define entities
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Normalize the data
const normalizedData = normalize(notificationsData.default, [notification]);

// Export the normalized data
export { normalizedData };

// Updated function to use normalized data
export const getAllNotificationsByUser = (userId) => {
  const { notifications, messages } = normalizedData.entities;
  const userNotifications = [];
  
  for (const id in notifications) {
    if (notifications[id].author === userId) {
      const messageId = notifications[id].context;
      userNotifications.push(messages[messageId]);
    }
  }
  
  return userNotifications;
};
