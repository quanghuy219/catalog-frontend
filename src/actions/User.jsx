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
      };
      const { token } = json.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      return dispatch({
        type: LOGIN,
        name: user.name,
        id: user.id,
        token,
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
