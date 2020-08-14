import { ActionTypes } from '../utils/constant';
import { get } from '../utils/api';


export const fetchCategories = () => ({
  type: ActionTypes.FETCH_CATEGORIES,
  promise: get('/categories', { offset: 0, limit: 20 }),
});

export const fetchCategory = categoryId => ({
  type: ActionTypes.FETCH_CATEGORY,
  promise: get(`/categories/${categoryId}`),
});
