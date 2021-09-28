import {createReducer} from 'redux-act';

import {setUser} from '../actions';

const initUser = {
  userId: null,
  displayName: null,
  error: null,
};

export default createReducer(
  {
    [setUser]: (state, payload) => payload,
  },
  initUser,
);
