import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import menu from './menu/reducer';
import category from './category/reducer';
import task from './task/reducer';

export default combineReducers({
  auth,
  user,
  menu,
  category,
  task,
});
