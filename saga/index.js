import {all} from '@redux-saga/core/effects';

import auth from './auth';
import feed from './feed';

export default function* () {
  yield all([auth(), feed()]);
}
