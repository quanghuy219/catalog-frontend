import { ActionTypes } from '../utils/constant';

const initialState = {
  byId: {},
  allIds: [],
};

const categoriesReducer = function setCategoryActions(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_CATEGORIES_SUCCESS: {
      const categories = action.payload.categories.reduce((acc, category) => {
        acc.byId[category.id] = category;
        acc.allIds.push(category.id);
        return acc;
      }, {
        byId: {},
        allIds: [],
      });
      return categories;
    }
    default:
      return state;
  }
};

export default categoriesReducer;
