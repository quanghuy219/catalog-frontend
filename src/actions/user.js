import { ActionTypes } from '../utils/constant';
import {
  get, post,
} from '../utils/api';

export const login = (username, password) => ({
  type: ActionTypes.LOGIN,
  promise: post('/login', { username, password }, {}, false),
});

export const fetchUser = () => ({
  type: ActionTypes.FETCH_USER,
  promise: get('/me'),
});

export function logout() {
  return (dispatch) => {
    // Delete user information in localStorage
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (user) {
      localStorage.removeItem('user');
    }
    if (token) {
      localStorage.removeItem('token');
    }
    dispatch({
      type: ActionTypes.LOGOUT,
    });
  };
}
