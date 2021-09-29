import {combineReducers} from 'redux';

import {signOut} from '../actions';

import user from './user';
import feed from './feed';
import profile from './profile';
import followers from './followers';
import following from './following';

const combineReducer = combineReducers({
  user: user,
  feed: feed,
  profile: profile,
  followers: followers,
  following: following,
});

const rootCombineReducer = (state, action) => {
  if (action.type === signOut().type) {
    state = undefined;
  }

  return combineReducer(state, action);
};

export default rootCombineReducer;
