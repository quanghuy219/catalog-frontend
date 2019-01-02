import { LOGIN } from '../actions/User';

const user = function setUserAction(state = {}, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        id: action.id,
        name: action.name,
        token: action.token,
      };
    }

    default:
      return state;
  }
};

export default user;
