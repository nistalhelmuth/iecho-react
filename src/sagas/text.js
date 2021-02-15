import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import * as textTypes from '../types/text';
import * as textActions from '../actions/text';
import * as postApi from '../apis/text';

function* textRegister(action) {
  const {
    payload: {
      text,
    },
  } = action;
  try {
    const response = yield call(
      postApi.registerUser,
      text,
    );
    yield put(textActions.registerTextConfirm({
      text: response.text,
    }));
  } catch (message) {
    yield put(textActions.registerTextDecline({
      error: message,
    }));
  }
}

function* LoginSaga() {
  yield takeLatest(
    textTypes.TEXT_CREATED,
    textRegister
  );
}

export default LoginSaga;
