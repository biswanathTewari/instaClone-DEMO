import {all} from '@redux-saga/core/effects';

import auth from './auth';
import feed from './feed';
import profile from './profile';
import followers from './followers';

export default function* () {
  yield all([auth(), feed(), profile(), followers()]);
}
