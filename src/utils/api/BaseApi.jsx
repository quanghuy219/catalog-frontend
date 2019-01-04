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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    };

    if (requireToken) {
      const token = localStorage.getItem('token');
      options.headers.Authorization = `Bearer ${token}`;
    }

    return fetch(`${URL}${uri}`, options)
      .then((response) => {
        const jsonResponse = response.json();
        // Return resolve promise on success response
        if (response.ok) {
          return jsonResponse;
        }
        // Throw new error on error response
        return jsonResponse.then((err) => { throw err; });
      });
  }

  put(uri, params, requireToken = true) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
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
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
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
