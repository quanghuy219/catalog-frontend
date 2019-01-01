const user = function setUserAction(state = {}, action) {
  switch (action.type) {
    case 'FETCH_USER_DATA': {
      return {
        id: action.data.user.id,
        name: action.data.user.name,
        token: action.data.token,
      };
    }

    default:
      return state;
  }
};

export default user;
