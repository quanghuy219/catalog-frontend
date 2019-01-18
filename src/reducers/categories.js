import { ActionTypes } from '../utils/constant';

const categoriesReducer = function setCategoryActions(state = [], action) {
  switch (action.type) {
    case ActionTypes.FETCH_CATEGORIES: {
      return [...action.categories];
    }

    default:
      return state;
  }
};

export default categoriesReducer;
