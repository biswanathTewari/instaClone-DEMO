import {put, takeEvery, all} from '@redux-saga/core/effects';

import {getFollowing, setFollowing} from '../actions';

import FIREBASE from '../firebase/apis';

function* fetchGetFollowing(action) {
  const following = [];
  yield put(setFollowing({isLoading: true, userFollowing: following}));
  const res = yield FIREBASE.getFollowing(action.payload.profileId);

  res.forEach(item => following.push({...item.data(), id: item.id}));
  yield put(setFollowing({isLoading: false, userFollowing: following}));
}

function* fetchGetFollowingFork() {
  yield takeEvery(getFollowing, fetchGetFollowing);
}

export default function* () {
  yield all([fetchGetFollowingFork()]);
}
