import {put, takeEvery, all} from '@redux-saga/core/effects';

import {getFollowers, setFollowers} from '../actions';

import FIREBASE from '../firebase/apis';

export function* fetchGetFollowers(action) {
  const followers = [];
  yield put(setFollowers({isLoading: true, userFollowers: followers}));
  const res = yield FIREBASE.getFollowers(action.payload.profileId);

  res.forEach(item => followers.push({...item.data(), id: item.id}));
  yield put(setFollowers({isLoading: false, userFollowers: followers}));
}

function* fetchGetFollowersFork() {
  yield takeEvery(getFollowers, fetchGetFollowers);
}

export default function* () {
  yield all([fetchGetFollowersFork()]);
}
