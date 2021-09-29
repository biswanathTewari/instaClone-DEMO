import {createReducer} from 'redux-act';

import {setProfile} from '../actions';

const initProfile = {
  isLoading: false,
  displayName: [],
  following: null,
  followers: null,
  postsCount: null,
  posts: [],
};

export default createReducer(
  {
    [setProfile]: (state, payload) => payload,
  },
  initProfile,
);
