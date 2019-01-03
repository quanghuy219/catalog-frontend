import UserApi from '../utils/api/UserApi';

const userApi = new UserApi();

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(code) {
  return dispatch => userApi.login('/api/login', code)
    .then((json) => {
      const user = {
        name: json.data.user.name,
        id: json.data.user.id,
        token: json.data.token,
      };
      localStorage.setItem('user', JSON.stringify(user));
      return dispatch({
        type: LOGIN,
        name: user.name,
        id: user.id,
        token: user.token,
      });
    })
    .catch((err) => {
      const error = {
        message: (err.message) ? err.message : 'Something went wrong!',
        error: (err.error) ? err.error : {},
      };
      return dispatch({
        type: 'ERROR',
        message: error.message,
        error: error.error,
      });
    });
}

export function logout() {
  return (dispatch) => {
    // Delete user information in localStorage
    const user = localStorage.getItem('user');
    if (user) {
      localStorage.removeItem('user');
    }
    dispatch({
      type: LOGOUT,
    });
  };
}
