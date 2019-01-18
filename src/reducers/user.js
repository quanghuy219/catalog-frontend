import { ActionTypes } from '../utils/constant';

const initialState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
initialState.token = localStorage.getItem('token');

const userReducer = function setUserAction(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      return {
        id: action.id,
        name: action.name,
        token: action.token,
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
