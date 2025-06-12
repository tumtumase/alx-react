import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './uiActionTypes';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password }
  };
};

export const logout = () => ({ type: LOGOUT });

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));

    return fetch('/dist/login-success.json')
      .then((res) => {
        if (!res.ok) throw new Error('Login failed');
        return res.json();
      })
      .then((data) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
};
