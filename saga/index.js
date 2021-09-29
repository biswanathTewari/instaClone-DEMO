import {all} from '@redux-saga/core/effects';

import auth from './auth';
import feed from './feed';
import profile from './profile';

export default function* () {
  yield all([auth(), feed(), profile()]);
}
