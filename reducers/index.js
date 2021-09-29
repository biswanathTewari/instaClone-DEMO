import {combineReducers} from 'redux';

import {signOut} from '../actions';

import user from './user';
import feed from './feed';
import profile from './profile';
import followers from './followers';

const combineReducer = combineReducers({
  user: user,
  feed: feed,
  profile: profile,
  followers: followers,
});

const rootCombineReducer = (state, action) => {
  if (action.type === signOut().type) {
    state = undefined;
  }

  return combineReducer(state, action);
};

export default rootCombineReducer;
