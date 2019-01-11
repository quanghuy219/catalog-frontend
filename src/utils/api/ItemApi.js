import BaseApi from './BaseApi';

class ItemApi extends BaseApi {
  post(data) {
    return super.post('/api/items', data);
  }

  put(itemID, data) {
    return super.put(`/api/items/${itemID}`, data);
  }

  delete(itemID) {
    return super.delete(`/api/items/${itemID}`);
  }
}

export default ItemApi;
