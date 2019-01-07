import ItemApi from '../utils/api/ItemApi';
import handleError from '../utils/Helpers';

const itemApi = new ItemApi();

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const CREATE_ITEM = 'CREATE_ITEM';

export function fetchItems() {
  return dispatch => itemApi.get('/api/items')
    .then(res => (
      dispatch({
        type: FETCH_ITEMS,
        items: res.data.items,
      })
    ))
    .catch((err) => {
      handleError(err, dispatch);
      throw err;
    });
}

export function fetchItemsByCategory(categoryID) {
  return dispatch => itemApi.get(`/api/categories/${categoryID}/items`)
    .then(res => (
      dispatch({
        type: FETCH_ITEMS,
        items: res.data.items,
      })
    ))
    .catch((err) => {
      handleError(err, dispatch);
      throw err;
    });
}

export function fetchItem(itemId) {
  return itemApi.get(`/api/items/${itemId}`)
    .then(res => (res.data))
    .catch((err) => { throw err; });
}

export function createItem(data) {
  return dispatch => itemApi.post(data)
    .then((res) => {
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
}

export function updateItem(itemID, data) {
  return dispatch => itemApi.put(itemID, data)
    .then(res => res.data)
    .catch((err) => {
      handleError(err, dispatch);
      throw err;
    });
}

export function deleteItem(itemID) {
  return dispatch => itemApi.delete(itemID)
    .then(res => res.data)
    .catch((err) => {
      handleError(err, dispatch);
      throw err;
    });
}
