import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  loginRequest,
  login,
  logout,
  loginSuccess,
  loginFailure
} from './uiActionCreators';

import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest async action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS on successful login', () => {
    fetchMock.getOnce('/dist/login-success.json', {
      body: { email: 'test@test.com', password: '123456', token: '1234' },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@test.com', password: '123456' } },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@test.com', '123456')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE on failed login', () => {
    fetchMock.getOnce('/dist/login-success.json', {
      throws: new Error('API failure')
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@test.com', password: 'wrongpass' } },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@test.com', 'wrongpass')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
