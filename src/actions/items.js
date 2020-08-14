import { ActionTypes } from '../utils/constant';
import {
  get, post, put, del,
} from '../utils/api';


export const fetchItemsByCategory = categoryId => ({
  type: ActionTypes.FETCH_ITEMS,
  promise: get(`/categories/${categoryId}/items`, { offset: 0, limit: 20 }),
});

export const fetchItem = (categoryId, itemId) => ({
  type: ActionTypes.FETCH_ITEM,
  promise: get(`/categories/${categoryId}/items/${itemId}`),
});

export const createItem = (categoryId, data) => ({
  type: ActionTypes.CREATE_ITEM,
  promise: post(`/categories/${categoryId}/items`, data),
});

export const updateItem = (categoryId, itemId, data) => ({
  type: ActionTypes.CREATE_ITEM,
  promise: put(`/categories/${categoryId}/items/${itemId}`, data),
});

export const deleteItem = (categoryId, itemId) => ({
  type: ActionTypes.DELETE_ITEM,
  promise: del(`/categories/${categoryId}/items/${itemId}`),
});
