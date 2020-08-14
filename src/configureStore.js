import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import apiMiddleware from './middlewares/apiMiddleware';
import authMiddleware from './middlewares/authMiddleware';

let middlewares = [apiMiddleware, authMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, logger];
}

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

export default store;
