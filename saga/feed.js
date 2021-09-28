import {call, put, takeEvery, select, all} from '@redux-saga/core/effects';

import {setFeeds, getFeeds} from '../actions';

import FIREBASE from '../firebase/apis';

export function* fetchGetFeeds() {
  const userId = yield select(state => state.user.userId);
  let documents = [];
  yield put(setFeeds({feeds: documents, isLoading: true}));
  const querySnapshot = yield FIREBASE.getFeeds(userId);
  let posts = querySnapshot.data().postsRef;
  for (let postRef of posts) {
    let post = yield postRef.get();
    documents.push({
      ...post.data(),
      id: post.id,
      ownerId: postRef.path.split('/')[1],
    });
  }
  yield put(setFeeds({feeds: documents, isLoading: false}));
}

function* fetchGetFeedsFork() {
  yield takeEvery(getFeeds, fetchGetFeeds);
}

export default function* () {
  yield all([fetchGetFeedsFork()]);
}
