import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from './notificationActionTypes';

// Action creator for successful notifications fetch
export const fetchNotificationsSuccess = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data
});

// Action creator for marking notification as read
export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index
});

// Action creator for setting filter type
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
});

// Bound action creators for immediate dispatch
export const boundFetchNotificationsSuccess = (data) => (dispatch) => 
  dispatch(fetchNotificationsSuccess(data));

export const boundMarkAsRead = (index) => (dispatch) => 
  dispatch(markAsRead(index));

export const boundSetNotificationFilter = (filter) => (dispatch) => 
  dispatch(setNotificationFilter(filter));
