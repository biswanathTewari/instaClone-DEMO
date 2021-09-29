import {createReducer} from 'redux-act';

import {setFollowers} from '../actions';

const init = {
  isLoading: false,
  userFollowers: [],
};

export default createReducer(
  {
    [setFollowers]: (state, payload) => payload,
  },
  init,
);
