const initialState = {
  error: {},
  message: '',
};

const errorReducer = function setErrorReducer(state = initialState, action) {
  switch (action.type) {
    case 'ERROR': {
      return {
        message: action.message,
        error: { ...action.error },
      };
    }

    default:
      return state;
  }
};

export default errorReducer;
