import { ActionTypes } from '../utils/constant';

const initialState = {
  byId: {},
  allIds: [],
};

const itemsReducer = function setItemActions(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ITEMS: {
      const items = action.items.reduce((acc, item) => {
        acc.byId[item.id] = item;
        acc.allIds.push(item.id);
        return acc;
      }, {
        byId: {},
        allIds: [],
      });
      return items;
    }
    case ActionTypes.CREATE_ITEM: {
      const newState = { ...state };
      newState.byId[action.item.id] = action.item;
      newState.allIds.push(action.item.id);
      return {
        ...newState,
      };
    }
    case ActionTypes.UPDATE_ITEM: {
      const newState = { ...state };
      newState.byId[action.item.id] = action.item;
      return {
        ...newState,
      };
    }
    default:
      return state;
  }
};

export default itemsReducer;
