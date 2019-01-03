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

  post(uri, params, requireToken = true) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify(params),
    };

    if (requireToken) {
      const token = localStorage.getItem('token');
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

  put(uri, params, requireToken = true) {
    const options = {
      methods: 'PUT',
      body: qs.stringify(params),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    if (requireToken) {
      const token = localStorage.getItem('token');
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

  delete(uri, params, requireToken = true) {
    const options = {
      methods: 'DELETE',
      body: qs.stringify(params),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    if (requireToken) {
      const token = localStorage.getItem('token');
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
}

export default BaseApi;
