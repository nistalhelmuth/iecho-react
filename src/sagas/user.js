import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import * as userTypes from '../types/user';
import * as userActions from '../actions/user';
import * as postApi from '../apis/user';

function* userRegister(action) {
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
    yield put(userActions.registerUserConfirm({
      text: response.text,
    }));
  } catch (message) {
    yield put(userActions.registerUserDecline({
      error: message,
    }));
  }
}

function* LoginSaga() {
  yield takeLatest(
    userTypes.USER_REGISTERED,
    userRegister
  );
}

export default LoginSaga;
