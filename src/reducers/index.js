import { combineReducers } from 'redux';
import textReducer, * as fromTextReducerfrom from './text';

export default combineReducers({
  textReducer,
});

//auth
export const getAllText = (state) => fromTextReducerfrom.getAllText(state.textReducer);
