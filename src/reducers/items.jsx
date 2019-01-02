import { FETCH_ITEMS } from '../actions/Items';

const initialState = {
  items: [],
  page: 0,
  offset: 10,
};

const itemsReducer = function setItemActions(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS: {
      return {
        items: [...action.items],
      };
    }

    default:
      return state;
  }
};

export default itemsReducer;
