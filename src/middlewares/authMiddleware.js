import ActionTypes from '../utils/constant';


const authMiddleware = () => next => async (action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.LOGIN_SUCCESS:
      localStorage.setItem('catalog.access_token', payload.access_token);
      break;
    case ActionTypes.FETCH_USER_SUCCESS:
      localStorage.setItem('catalog.user', JSON.stringify(payload));
      break;
    case ActionTypes.LOGOUT:
      localStorage.removeItem('catalog.user');
      localStorage.removeItem('catalog.access_token');
      break;
    default:
      break;
  }

  next(action);
};

export default authMiddleware;
