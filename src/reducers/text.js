import { combineReducers } from 'redux';
import * as textTypes from '../types/text';

const byId = (state={}, action) => {
  switch (action.type) {
    case textTypes.TEXT_CREATED: {
      const {
        payload: {
          text,
          id,
        },
      } = action;
      const textByIdState = {
        ...state,
        [id]: {
          text,
          loading: true,
        }
      }
      return textByIdState;
    }
    case textTypes.TEXT_CREATED_SUCCEEDED: {
      const {
        payload: {
          id,
          text,
          palindrome,
        },
      } = action;
      const textByIdState = {
        ...state,
        [id]: {
          id,
          text,
          palindrome,
          loading: false,
        }
      }
      return textByIdState;
    }
    case textTypes.TEXT_CREATED_FAILED: {
      const {
        payload: {
          id,
        },
      } = action;
      const textByIdState = {...state};
      delete textByIdState[id];
      return textByIdState;
    }
    default: {
      return state;
    }
  }
}

const order = (state=[], action) => {
  switch (action.type) {
    case textTypes.TEXT_CREATED: {
      const {
        payload: {
          id,
        },
      } = action;
      const textOrderState = [
        id,
        ...state
      ]
      return textOrderState;
    }
    case textTypes.TEXT_CREATED_FAILED: {
      const textOrderState = [...state];
      textOrderState.shift();
      return textOrderState;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  byId,
  order
})

//selectores
export const getTextById = (state, id) => state.byId[id] || undefined; 
export const getAllText = (state) => state.order.map((id) => getTextById(state, id));
