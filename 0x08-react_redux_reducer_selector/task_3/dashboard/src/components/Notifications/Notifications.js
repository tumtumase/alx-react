import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { NotificationTypeFilters } from '../../actions/notificationActionTypes';

const Notifications = ({ notifications, filter, markNotificationAsRead, setFilter }) => {
  return (
    <div className="notifications-container">
      <div className="filter-buttons">
        <button
          onClick={() => setFilter(NotificationTypeFilters.DEFAULT)}
          className={filter === NotificationTypeFilters.DEFAULT ? 'active' : ''}
        >
          Default
        </button>
        <button
          onClick={() => setFilter(NotificationTypeFilters.URGENT)}
          className={filter === NotificationTypeFilters.URGENT ? 'active' : ''}
        >
          Urgent
        </button>
      </div>
      <ul className="notifications-list">
        {notifications.map(notification => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            markAsRead={markNotificationAsRead}
          />
        ))}
      </ul>
    </div>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  markNotificationAsRead: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default Notifications;
