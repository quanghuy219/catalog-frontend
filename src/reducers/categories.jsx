import { FETCH_CATEGORIES } from '../actions/Categories';

const categoriesReducer = function setCategoryActions(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      return [...action.categories];
    }

    default:
      return state;
  }
};

export default categoriesReducer;
