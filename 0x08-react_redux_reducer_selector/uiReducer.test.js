import uiReducer, { initialState } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return initial state for unknown action', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER }))
      .toEqual({
        ...initialState,
        isNotificationDrawerVisible: true
      });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    expect(uiReducer(undefined, { type: HIDE_NOTIFICATION_DRAWER }))
      .toEqual({
        ...initialState,
        isNotificationDrawerVisible: false
      });
  });
});
