import {createReducer} from 'redux-act';

import {setFollowing} from '../actions';

const init = {
  isLoading: false,
  userFollowing: [],
};

export default createReducer(
  {
    [setFollowing]: (state, payload) => payload,
  },
  init,
);
