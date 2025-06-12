import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from './notificationActionTypes';

import {
  markAsAread,
  setNotificationFilter
} from './notificationActionCreators';

describe('notification action creators', () => {
  it('markAsAread with index 1 should return correct action', () => {
    const expected = {
      type: MARK_AS_READ,
      index: 1
    };
    expect(markAsAread(1)).toEqual(expected);
  });

  it('setNotificationFilter with DEFAULT should return correct action', () => {
    const expected = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT
    };
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expected);
  });
});

