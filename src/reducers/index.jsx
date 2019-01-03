import { combineReducers } from 'redux';
import itemsReducer from './Items';
import userReducer from './User';
import categoriesReducer from './Categories';
import errorReducer from './Error';

const rootReducers = combineReducers({
  items: itemsReducer,
  user: userReducer,
  categories: categoriesReducer,
  error: errorReducer,
});

export default rootReducers;
