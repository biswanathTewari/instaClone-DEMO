import {combineReducers} from 'redux';

import {signOut} from '../actions';

import user from './user';
import feed from './feed';
import profile from './profile';

const combineReducer = combineReducers({
  user: user,
  feed: feed,
  profile: profile,
});

const rootCombineReducer = (state, action) => {
  if (action.type === signOut().type) {
    state = undefined;
  }

  return combineReducer(state, action);
};

export default rootCombineReducer;
