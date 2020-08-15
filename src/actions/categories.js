import { ActionTypes } from '../utils/constant';
import { get, post } from '../utils/api';


export const fetchCategories = params => ({
  type: ActionTypes.FETCH_CATEGORIES,
  promise: get('/categories', params),
});

export const fetchCategory = categoryId => ({
  type: ActionTypes.FETCH_CATEGORY,
  promise: get(`/categories/${categoryId}`),
});

export const createCategory = data => ({
  type: ActionTypes.CREATE_CATEGORY,
  promise: post('/categories', data),
});
