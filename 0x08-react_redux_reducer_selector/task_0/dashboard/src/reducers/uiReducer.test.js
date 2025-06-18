import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SELECT_COURSE
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  };

  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state).toEqual(initialState);
  });

  it('should change isNotificationDrawerVisible property correctly when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true
    });
  });

  it('should change isNotificationDrawerVisible property correctly when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    const state = uiReducer(undefined, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: false
    });
  });

  it('should change isUserLoggedIn property correctly when LOGIN_SUCCESS action is passed', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: true
    });
  });

  it('should change isUserLoggedIn property correctly when LOGIN_FAILURE action is passed', () => {
    const state = uiReducer(undefined, { type: LOGIN_FAILURE });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: false
    });
  });

  it('should change isUserLoggedIn property correctly when LOGOUT action is passed', () => {
    const state = uiReducer(undefined, { type: LOGOUT });
    expect(state).toEqual({
      ...initialState,
      isUserLoggedIn: false
    });
  });
});
