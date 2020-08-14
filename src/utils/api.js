import config from './config';

const genQueryParams = params => (
  Object.keys(params).map(key => (
    `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  )).join('&')
);

export const get = (uri, params = null, requireToken = true) => {
  let url = `${config.API_URL}${uri}`;
  if (params) {
    const queryString = genQueryParams(params);
    url += `?${queryString}`;
  }
  const options = {
    method: 'GET',
  };
  if (requireToken) {
    const token = localStorage.getItem('catalog.access_token');
    options.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return fetch(url, options);
};

export const post = (uri, body, params = null, requireToken = true) => {
  let url = `${config.API_URL}${uri}`;
  if (params) {
    const queryString = genQueryParams(params);
    url += `?${queryString}`;
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  if (requireToken) {
    const token = localStorage.getItem('catalog.access_token');
    options.headers.Authorization = `Bearer ${token}`;
  }

  return fetch(url, options);
};

export const put = (uri, body, params = null, requireToken = true) => {
  let url = `${config.API_URL}${uri}`;
  if (params) {
    const queryString = genQueryParams(params);
    url += `?${queryString}`;
  }

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  if (requireToken) {
    const token = localStorage.getItem('catalog.access_token');
    options.headers.Authorization = `Bearer ${token}`;
  }

  return fetch(url, options);
};

export const del = (uri, params = null, requireToken = true) => {
  let url = `${config.API_URL}${uri}`;
  if (params) {
    const queryString = genQueryParams(params);
    url += `?${queryString}`;
  }

  const options = {
    method: 'DELETE',
  };

  if (requireToken) {
    const token = localStorage.getItem('catalog.access_token');
    options.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return fetch(url, options);
};
