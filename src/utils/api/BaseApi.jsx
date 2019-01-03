import qs from 'qs';
import URL from '../Constant';

class BaseApi {
  get(uri) {
    return fetch(`${URL}${uri}`)
      .then((response) => {
        const jsonResponse = response.json();
        if (response.ok) {
          return jsonResponse;
        }
        return jsonResponse.then((err) => { throw err; });
      });
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
      .then((response) => {
        const jsonResponse = response.json();
        if (response.ok) {
          return jsonResponse;
        }
        return jsonResponse.then((err) => { throw err; });
      });
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
      .then((response) => {
        const jsonResponse = response.json();
        if (response.ok) {
          return jsonResponse;
        }
        return jsonResponse.then((err) => { throw err; });
      });
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
      .then((response) => {
        const jsonResponse = response.json();
        if (response.ok) {
          return jsonResponse;
        }
        return jsonResponse.then((err) => { throw err; });
      });
  }
}

export default BaseApi;
