import BaseApi from './BaseApi';

class UserApi extends BaseApi {
  login(uri, params) {
    return super.post(uri, params, false);
  }
}

export default UserApi;
