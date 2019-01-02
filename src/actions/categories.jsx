import CategoryApi from '../utils/api/CategoryApi';

const categoryApi = new CategoryApi();

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function fetchCategories() {
  return dispatch => categoryApi.get('/api/categories')
    .then(res => (
      dispatch({
        type: FETCH_CATEGORIES,
        categories: res.data.categories,
      })
    ));
}
