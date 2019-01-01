import { combineReducers } from 'redux';
import items from './items';
import user from './user';
import categories from './categories';

const rootReducers = combineReducers({
  items,
  user,
  categories,
});

export default rootReducers;
