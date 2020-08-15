const dev = {
  API_URL: 'http://localhost:5000',
  ITEMS_PER_PAGE: 20,
};

const prod = {
  API_URL: 'https://catalog-backend.herokuapp.com',
  ITEMS_PER_PAGE: 20,
};

const config = (process.env.NODE_ENV === 'production') ? prod : dev;

export default config;
