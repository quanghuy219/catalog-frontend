import ItemApi from '../utils/api/ItemApi';
import { ActionTypes } from '../utils/constant';
import {
  handleError,
  onStartingRequest,
  onReceivingResponse,
  showSuccessMessage,
} from '../utils/helpers';

const itemApi = new ItemApi();

function onSuccessFetchingItems({ items }) {
  return {
    type: ActionTypes.FETCH_ITEMS,
    items,
  };
}

function onSuccessCreatingItem({ item }) {
  return {
    type: ActionTypes.CREATE_ITEM,
    item,
  };
}

function onSuccessUpdatingItem({ item }) {
  return {
    type: ActionTypes.UPDATE_ITEM,
    item,
  };
}

export function fetchItems() {
  return (dispatch) => {
    dispatch(onStartingRequest());
    return itemApi.get('/api/items')
      .then((res) => {
        dispatch(onReceivingResponse());
        dispatch(onSuccessFetchingItems(res.data));
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}

export function fetchItemsByCategory(categoryID) {
  return (dispatch) => {
    dispatch(onStartingRequest());
    return itemApi.get(`/api/categories/${categoryID}/items`)
      .then((res) => {
        dispatch(onReceivingResponse());
        dispatch(onSuccessFetchingItems(res.data));
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}

export function fetchItem(itemId) {
  return (dispatch) => {
    dispatch(onStartingRequest());
    return itemApi.get(`/api/items/${itemId}`)
      .then((res) => {
        dispatch(onReceivingResponse());
        return res.data;
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}

export function createItem(data) {
  return (dispatch) => {
    dispatch(onStartingRequest());
    return itemApi.post(data)
      .then((res) => {
        dispatch(onReceivingResponse());
        dispatch(onSuccessCreatingItem(res.data));
        dispatch(showSuccessMessage(res.message));
        return res.data;
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}

export function updateItem(itemID, data) {
  return (dispatch) => {
    dispatch(onStartingRequest());
    return itemApi.put(itemID, data)
      .then((res) => {
        dispatch(onReceivingResponse());
        dispatch(onSuccessUpdatingItem(res.data));
        dispatch(showSuccessMessage(res.message));
        return res.data;
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}

export function deleteItem(itemID) {
  return (dispatch) => {
    dispatch(onStartingRequest());
    return itemApi.delete(itemID)
      .then((res) => {
        dispatch(onReceivingResponse());
        dispatch(showSuccessMessage(res.message));
        return res.data;
      })
      .catch((err) => {
        handleError(err, dispatch);
        throw err;
      });
  };
}
