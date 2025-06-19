import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ notification, markAsRead }) => {
  const { id, type, value, isRead } = notification;
  
  return (
    <li
      className={`notification-item ${type} ${isRead ? 'read' : 'unread'}`}
      onClick={() => markAsRead(id)}
    >
      <span className="notification-type">{type}</span>
      <span className="notification-value">{value}</span>
    </li>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired
  }).isRequired,
  markAsRead: PropTypes.func.isRequired
};

export default NotificationItem;
