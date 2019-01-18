import { ActionTypes } from '../utils/constant';

const initialState = {
  loading: false,
};

const loaderReducer = function setLoadingAction(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_LOADER: {
      return {
        loading: true,
      };
    }
    case ActionTypes.HIDE_LOADER: {
      return {
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default loaderReducer;
