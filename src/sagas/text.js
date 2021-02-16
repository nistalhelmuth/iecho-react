import {
  put,
  takeLatest,
  call,
  delay,
} from 'redux-saga/effects';
import * as textTypes from '../types/text';
import * as textActions from '../actions/text';
import * as postApi from '../apis/text';

function* textRegister(action) {
  const {
    payload: {
      text,
      id,
    },
  } = action;
  yield delay(500);
  try {
    const response = yield call(
      postApi.registerUser,
      text,
    );
    yield put(textActions.registerTextConfirm({
      text: response.text,
      palindrome: response.palindrome,
      id,
    }));
  } catch (message) {
    yield put(textActions.registerTextDecline({
      id,
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
