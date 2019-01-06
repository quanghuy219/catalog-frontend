import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

let middlewares = [ReduxPromise, thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, logger];
}
const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
