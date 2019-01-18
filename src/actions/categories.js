import CategoryApi from '../utils/api/CategoryApi';
import { handleError, startFetching, endFetching } from '../utils/helpers';

const categoryApi = new CategoryApi();

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function fetchCategories() {
  return (dispatch) => {
    startFetching(dispatch);
    return categoryApi.get('/api/categories')
      .then((res) => {
        endFetching(dispatch);
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
  };
}
