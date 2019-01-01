const items = function setItemActions(state = [], action) {
  switch (action.type) {
    case 'FETCH_ITEMS': {
      return [...action.items];
    }

    default:
      return state;
  }
};

export default items;