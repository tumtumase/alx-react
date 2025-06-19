// task_3/dashboard/src/selectors/notificationSelectors.js

// Get all notifications
export const getNotifications = (state) => 
  state.notifications.notifications;

// Get unread notifications
export const getUnreadNotifications = (state) => 
  state.notifications.notifications.filter(
    notification => !notification.isRead
  );

// Get notifications filtered by type
export const getFilteredNotifications = (state) => {
  const { filter, notifications } = state.notifications;
  
  if (filter === 'URGENT') {
    return notifications.filter(notification => notification.type === 'urgent');
  }
  return notifications;
};

// Get current filter
export const getNotificationFilter = (state) => 
  state.notifications.filter;

// Get count of unread notifications
export const getUnreadNotificationsCount = (state) => 
  getUnreadNotifications(state).length;
