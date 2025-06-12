import * as notificationsData from '../../../notifications.json';

/**
 * Get all notifications by user ID
 * @param {string} userId - The user ID to filter notifications by
 * @returns {Array} Array of context objects for the specified user
 */
export function getAllNotificationsByUser(userId) {
  return notificationsData.default
    .filter(notification => notification.author.id === userId)
    .map(notification => notification.context);
}
