import { combineReducers } from 'redux';
import itemsReducer from './Items';
import userReducer from './User';
import categoriesReducer from './Categories';

const rootReducers = combineReducers({
  items: itemsReducer,
  user: userReducer,
  categories: categoriesReducer,
});

export default rootReducers;
