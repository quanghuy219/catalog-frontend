import ItemApi from '../utils/api/ItemApi';

const itemApi = new ItemApi();

export const FETCH_ITEMS = 'FETCH_ITEMS';

export function fetchItems() {
  return dispatch => itemApi.get('/api/items')
    .then(res => (
      dispatch({
        type: 'FETCH_ITEMS',
        items: res.data.items,
      })
    ));
}
