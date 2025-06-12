import { bindActionCreators } from 'redux';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const displayNotificationDrawer = () => {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
};

export const hideNotificationDrawer = () => {
  return { type: HIDE_NOTIFICATION_DRAWER };
};

export const boundLogin = (dispatch) =>
  bindActionCreators(login, dispatch);

export const boundLogout = (dispatch) =>
  bindActionCreators(logout, dispatch);

export const boundDisplayNotificationDrawer = (dispatch) =>
  bindActionCreators(displayNotificationDrawer, dispatch);

export const boundHideNotificationDrawer = (dispatch) =>
  bindActionCreators(hideNotificationDrawer, dispatch);
