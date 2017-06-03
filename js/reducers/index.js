
import { combineReducers } from 'redux';

import drawer from './drawer';
import user from './user';
import list from './list';
import events from './events';

export default combineReducers({

  drawer,
  user,
  list,
  events
});
