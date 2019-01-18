import UserApi from '../utils/api/UserApi';
import { ActionTypes } from '../utils/constant';
import {
  handleError,
  onStartingRequest,
  onReceivingResponse,
  showSuccessMessage,
} from '../utils/helpers';

const userApi = new UserApi();

function onLoginSuccess(name, id, token) {
  return {
    type: ActionTypes.LOGIN,
    name,
    id,
    token,
  };
}

export function login(code) {
  return (dispatch) => {
    dispatch(onStartingRequest());
    return userApi.login('/api/login', code)
      .then((json) => {
        dispatch(onReceivingResponse());
        const user = {
          name: json.data.user.name,
          id: json.data.user.id,
        };
        const { token } = json.data;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        dispatch(onLoginSuccess(user.name, user.id, token));
        dispatch(showSuccessMessage(json.message));
        return user;
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
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
      type: ActionTypes.LOGOUT,
    });
  };
}
