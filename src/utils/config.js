const dev = {
  API_URL: 'http://localhost:5000',
};

const prod = {
  API_URL: 'https://catalog-backend.herokuapp.com',
};

const config = (process.env.NODE_ENV === 'production') ? prod : dev;

export default config;
