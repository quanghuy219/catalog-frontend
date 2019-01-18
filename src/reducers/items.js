import { ActionTypes } from '../utils/constant';

const initialState = {
  items: [],
  page: 0,
  offset: 10,
};

const itemsReducer = function setItemActions(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ITEMS: {
      return {
        items: [...action.items],
      };
    }
    case ActionTypes.CREATE_ITEM: {
      return {
        items: [action.item, ...state.items],
      };
    }
    default:
      return state;
  }
};

export default itemsReducer;
