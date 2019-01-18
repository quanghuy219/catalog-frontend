import { ActionTypes } from '../utils/constant';

const initialState = {
  error: {},
  message: '',
  type: '',
};

const notificationReducer = function setNotificationReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_ERROR_MESSAGE: {
      return {
        type: 'ERROR',
        message: action.message,
        error: { ...action.error },
      };
    }

    case ActionTypes.SHOW_SUCCESS_MESSAGE: {
      return {
        type: 'SUCCESS',
        message: action.message,
      };
    }

    default:
      return state;
  }
};

export default notificationReducer;
