import UserApi from '../utils/api/UserApi';

const userApi = new UserApi();

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(code) {
  return dispatch => userApi.login('/api/login', code)
    .then(json => (
      dispatch({
        type: LOGIN,
        name: json.data.user.name,
        id: json.data.user.id,
        token: json.data.token,
      })
    ));
}

export function logout() {
  return dispatch => dispatch({
    type: LOGOUT,
  });
}
