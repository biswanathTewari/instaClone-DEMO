import {call, put, takeEvery, takeLatest, all} from '@redux-saga/core/effects';

import NavigationAction from '../navigation/NavigationAction';

import {logIn, setUser, signUp} from '../actions';

import FIREBASE from '../firebase/apis';

function* fetchLogin(action) {
  const {email, password} = action.payload;
  try {
    const response = yield FIREBASE.logIn(email, password);
    const userResponse = yield FIREBASE.getUser(response.user.uid);
    yield put(
      setUser({
        userId: response.user.uid,
        email,
        displayName: userResponse.data().displayName,
      }),
    );

    yield call(NavigationAction.resetTo, 'DashBoard', 0);
  } catch (error) {
    console.log(error.code.split('/')[1]);
    //yield put(setError(error.code.split('/')[1]));
  }
}

function* fetchLoginFork() {
  yield takeEvery(logIn, fetchLogin);
}

function* fetchSignup(action) {
  const {email, password, displayName} = action.payload;
  try {
    const response = yield FIREBASE.signUp(email, password);
    yield put(setUser({userId: response.user.uid, email, displayName}));
    yield FIREBASE.setUser(response.user.uid, displayName);
    yield call(NavigationAction.resetTo, 'Home', 0);
  } catch (error) {
    console.log(error.code.split('/')[1]);
    //yield put(setError(error.code.split('/')[1]));
  }
}

function* fetchSignupFork() {
  yield takeEvery(signUp, fetchSignup);
}

export default function* () {
  yield all([fetchLoginFork(), fetchSignupFork()]);
}
