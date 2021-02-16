import * as types from '../types/text';
import { v4 as uuidv4 } from 'uuid';

export const registerText = ({
  text
}) => ({
  type: types.TEXT_CREATED,
  payload: {
    text,
    id: uuidv4(),
  },
});

export const registerTextConfirm = ({
  id,
  palindrome,
  text,
}) => ({
  type: types.TEXT_CREATED_SUCCEEDED,
  payload: {
    text,
    palindrome,
    id,
  },
});

export const registerTextDecline = ({
  id,
  error,
}) => ({
  type: types.TEXT_CREATED_FAILED,
  payload: {
    id,
    error,
  },
});
