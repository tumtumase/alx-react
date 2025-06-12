import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

describe('UI action creators', () => {
  it('login should return correct action', () => {
    const expected = {
      type: LOGIN,
      user: { email: 'test@example.com', password: '1234' },
    };
    expect(login('test@example.com', '1234')).toEqual(expected);
  });

  it('logout should return correct action', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it('displayNotificationDrawer should return correct action', () => {
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('hideNotificationDrawer should return correct action', () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});
