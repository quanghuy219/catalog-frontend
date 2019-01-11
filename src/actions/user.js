import UserApi from '../utils/api/UserApi';
import handleError from '../utils/helpers';

const userApi = new UserApi();

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(code) {
  return dispatch => userApi.login('/api/login', code)
    .then((json) => {
      const user = {
        name: json.data.user.name,
        id: json.data.user.id,
      };
      const { token } = json.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      dispatch({
        type: LOGIN,
        name: user.name,
        id: user.id,
        token,
      });
      return user;
    })
    .catch((err) => {
      handleError(err, dispatch);
      throw err;
    });
}

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
      type: LOGOUT,
    });
  };
}
