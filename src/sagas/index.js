import { fork, all } from 'redux-saga/effects';
import TextSaga from './text';

function* mainSaga() {
  yield all([
    fork(TextSaga),
  ]);
}

export default mainSaga;
