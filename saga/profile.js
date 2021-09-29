import {put, takeEvery, all} from '@redux-saga/core/effects';

import {getProfile, setProfile} from '../actions';

import FIREBASE from '../firebase/apis';

export function* fetchGetProfile(action) {
  const profileId = action.payload;
  const posts = [];
  yield put(
    setProfile({
      isLoading: true,
      displayName: [],
      following: null,
      followers: null,
      postsCount: null,
      posts: [],
    }),
  );

  const res = yield FIREBASE.getProfile(profileId);
  const postsRef = yield FIREBASE.getProfilePosts(profileId);

  postsRef.forEach(postRef => {
    posts.push(postRef.data());
  });
  yield put(setProfile({isLoading: false, ...res.data(), posts: posts}));
}

function* fetchGetProfileFork() {
  yield takeEvery(getProfile, fetchGetProfile);
}

export default function* () {
  yield all([fetchGetProfileFork()]);
}
