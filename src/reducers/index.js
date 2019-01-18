import { combineReducers } from 'redux';
import itemsReducer from './items';
import userReducer from './user';
import categoriesReducer from './categories';
import notificationReducer from './notification';
import loaderReducer from './loader';

const rootReducers = combineReducers({
  items: itemsReducer,
  user: userReducer,
  categories: categoriesReducer,
  notification: notificationReducer,
  loader: loaderReducer,
});

export default rootReducers;
