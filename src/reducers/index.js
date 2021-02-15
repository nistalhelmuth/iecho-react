import { combineReducers } from 'redux';
import authReducer, * as fromAuthReducer from './auth';

export default combineReducers({
  authReducer,
});

//auth
export const getUserToken = (state) => fromAuthReducer.getUserToken(state.authReducer);
