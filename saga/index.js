import {all} from '@redux-saga/core/effects';

import auth from './auth';

export default function* () {
  yield all([auth()]);
}
