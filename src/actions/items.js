import ItemApi from '../utils/api/ItemApi';
import { handleError, startFetching, endFetching } from '../utils/helpers';

const itemApi = new ItemApi();

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const CREATE_ITEM = 'CREATE_ITEM';

export function fetchItems() {
  return (dispatch) => {
    startFetching(dispatch);
    return itemApi.get('/api/items')
      .then((res) => {
        endFetching(dispatch);
        dispatch({
          type: FETCH_ITEMS,
          items: res.data.items,
        });
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}

export function fetchItemsByCategory(categoryID) {
  return (dispatch) => {
    startFetching(dispatch);
    return itemApi.get(`/api/categories/${categoryID}/items`)
      .then((res) => {
        endFetching(dispatch);
        dispatch({
          type: FETCH_ITEMS,
          items: res.data.items,
        });
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}

export function fetchItem(itemId) {
  return (dispatch) => {
    startFetching(dispatch);
    return itemApi.get(`/api/items/${itemId}`)
      .then((res) => {
        endFetching(dispatch);
        return res.data;
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}

export function createItem(data) {
  return (dispatch) => {
    startFetching(dispatch);
    return itemApi.post(data)
      .then((res) => {
        endFetching(dispatch);
        dispatch({
          type: CREATE_ITEM,
          item: res.data.item,
        });
        return res.data;
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}

export function updateItem(itemID, data) {
  return (dispatch) => {
    startFetching(dispatch);
    return itemApi.put(itemID, data)
      .then((res) => {
        endFetching(dispatch);
        return res.data;
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}

export function deleteItem(itemID) {
  return (dispatch) => {
    startFetching(dispatch);
    return itemApi.delete(itemID)
      .then((res) => {
        endFetching(dispatch);
        return res.data;
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}
