import CategoryApi from '../utils/api/CategoryApi';
import { ActionTypes } from '../utils/constant';
import {
  handleError,
  onStartingRequest,
  onReceivingResponse,
} from '../utils/helpers';

const categoryApi = new CategoryApi();

function onFetchingSucess({ categories }) {
  return {
    type: ActionTypes.FETCH_CATEGORIES,
    categories,
  };
}

export function fetchCategories() {
  return (dispatch) => {
    dispatch(onStartingRequest());
    return categoryApi.get('/api/categories')
      .then((res) => {
        dispatch(onReceivingResponse());
        dispatch(onFetchingSucess(res.data));
        return res.data;
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}

export default fetchCategories;
