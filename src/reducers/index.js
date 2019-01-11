import { combineReducers } from 'redux';
import itemsReducer from './items';
import userReducer from './user';
import categoriesReducer from './categories';
import errorReducer from './error';

const rootReducers = combineReducers({
  items: itemsReducer,
  user: userReducer,
  categories: categoriesReducer,
  error: errorReducer,
});

export default rootReducers;
