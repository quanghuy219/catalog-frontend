import qs from 'qs';
import URL from '../Constant';

class BaseApi {
  get(uri) {
    return fetch(`${URL}${uri}`)
      .then(
        response => response.json(),
        error => console.log('An error occured', error),
      );
  }

  post(uri, params, token = '') {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify(params),
    };

    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    }

    return fetch(`${URL}${uri}`, options)
      .then(response => response.json());
  }

  put(uri, params, token = '') {
    const options = {
      methods: 'PUT',
      body: qs.stringify(params),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    if (token) {
      options.headers.authorization = `Bearer ${token}`;
    }

    return fetch(`${URL}${uri}`, options)
      .then(
        response => response.json(),
        error => console.log('An error occured', error),
      );
  }

  delete(uri, params, token = '') {
    const options = {
      methods: 'PUT',
      body: qs.stringify(params),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    if (token) {
      options.headers.authorization = `Bearer ${token}`;
    }

    return fetch(`${URL}${uri}`, options)
      .then(
        response => response.json(),
        error => console.log('An error occured', error),
      );
  }
}

export default BaseApi;
