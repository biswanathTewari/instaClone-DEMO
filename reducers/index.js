import {combineReducers} from 'redux';

import user from './user';
import feed from './feed';
import profile from './profile';

export default combineReducers({
  user: user,
  feed: feed,
  profile: profile,
});
