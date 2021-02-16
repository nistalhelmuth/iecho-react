import { combineReducers } from 'redux';
import textReducer, * as fromTextReducer from './text';

export default combineReducers({
  textReducer,
});

//auth
export const getAllText = (state) => fromTextReducer.getAllText(state.textReducer);
