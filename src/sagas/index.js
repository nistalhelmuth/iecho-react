import { fork, all } from 'redux-saga/effects';
import UserSaga from './user';

function* mainSaga() {
  yield all([
    fork(UserSaga),
  ]);
}

export default mainSaga;
