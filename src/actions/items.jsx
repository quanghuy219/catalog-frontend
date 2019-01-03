import ItemApi from '../utils/api/ItemApi';

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
    ));
}

export function fetchItem(itemId) {
  return itemApi.get(`/api/items/${itemId}`)
    .then(res => (res.data));
}

export function createItem(data) {
  return dispatch => itemApi.post('/api/items', data)
    .then((res) => {
      dispatch({
        type: CREATE_ITEM,
        item: res.data.item,
      });
      return res.data;
    })
    .catch((err) => {
      const error = {
        message: (err.message) ? err.message : 'Something went wrong!',
        error: (err.error) ? err.error : {},
      };
      dispatch({
        type: 'ERROR',
        message: error.message,
        error: error.error,
      });
    });
}
