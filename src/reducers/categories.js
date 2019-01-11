import { FETCH_CATEGORIES } from '../actions/categories';

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
