import { FETCH_ITEMS, CREATE_ITEM } from '../actions/items';

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
    case CREATE_ITEM: {
      return {
        items: [action.item, ...state.items],
      };
    }
    default:
      return state;
  }
};

export default itemsReducer;
