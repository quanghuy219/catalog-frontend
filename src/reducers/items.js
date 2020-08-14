import { ActionTypes } from '../utils/constant';

const initialState = {
  byId: {},
  allIds: [],
};

const itemsReducer = function setItemActions(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ITEMS_SUCCESS: {
      const items = action.payload.items.reduce((acc, item) => {
        acc.byId[item.id] = item;
        acc.allIds.push(item.id);
        return acc;
      }, {
        byId: {},
        allIds: [],
      });
      return items;
    }
    case ActionTypes.CREATE_ITEM_SUCCESS: {
      const newState = { ...state };
      newState.byId[action.payload.id] = action.payload;
      newState.allIds.push(action.payload.id);
      return {
        ...newState,
      };
    }
    case ActionTypes.UPDATE_ITEM_SUCCESS: {
      const newState = { ...state };
      newState.byId[action.payload.id] = action.payload;
      return {
        ...newState,
      };
    }
    case ActionTypes.DELETE_ITEM_SUCCESS: {
      const allIds = state.allIds.filter(id => id !== action.itemId);
      const { [action.itemId]: _, ...newByid } = state.byId;
      return {
        allIds,
        byId: newByid,
      };
    }
    default:
      return state;
  }
};

export default itemsReducer;
