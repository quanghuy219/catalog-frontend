import CategoryApi from '../utils/api/CategoryApi';
import handleError from '../utils/helpers';

const categoryApi = new CategoryApi();

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function fetchCategories() {
  return dispatch => categoryApi.get('/api/categories')
    .then((res) => {
      dispatch({
        type: FETCH_CATEGORIES,
        categories: res.data.categories,
      });
      return res.data;
    })
    .catch((err) => {
      handleError(err, dispatch);
      throw err;
    });
}
