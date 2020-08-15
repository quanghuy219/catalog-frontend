import { ActionTypes } from '../utils/constant';

const user = localStorage.getItem('catalog.user');
const initialState = user ? JSON.parse(user) : {};
initialState.token = localStorage.getItem('catalog.access_token') || '';

const userReducer = function setUserAction(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.access_token,
      };
    }
    case ActionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        token: action.payload.access_token,
      };
    }
    case ActionTypes.FETCH_USER_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case ActionTypes.LOGOUT: {
      return {};
    }
    default:
      return state;
  }
};

export default userReducer;
