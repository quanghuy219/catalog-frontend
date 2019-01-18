import { combineReducers } from 'redux';
import itemsReducer from './items';
import userReducer from './user';
import categoriesReducer from './categories';
import errorReducer from './error';
import loaderReducer from './loader';

const rootReducers = combineReducers({
  items: itemsReducer,
  user: userReducer,
  categories: categoriesReducer,
  error: errorReducer,
  loader: loaderReducer,
});

export default rootReducers;
