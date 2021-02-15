import * as types from '../types/text';

export const registerText = ({
  text
}) => ({
  type: types.TEXT_CREATED,
  payload: {
    text,
  },
});

export const registerTextConfirm = ({
  text,
}) => ({
  type: types.TEXT_CREATED_SUCCEEDED,
  payload: {
    text,
  },
});

export const registerTextDecline = ({
  error,
}) => ({
  type: types.TEXT_CREATED_FAILED,
  payload: {
    error,
  },
});
