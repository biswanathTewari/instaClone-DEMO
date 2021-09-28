import {createReducer} from 'redux-act';

import {setFeeds} from '../actions';

const init = {
  feeds: [],
  isLoading: false,
};

export default createReducer(
  {
    [setFeeds]: (state, payload) => payload,
  },
  init,
);
