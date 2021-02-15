import { combineReducers } from 'redux';
import * as textTypes from '../types/text';

const byId = (state={
  1: {
    text: "this is the text",
  }
}, action) => {
  switch (action.type) {
    case textTypes.TEXT_CREATED: {
      const {
        payload: {
          text,
          randomId,
        },
      } = action;
      const textByIdState = {
        ...state,
        [randomId]: {
          text,
          loading: true,
        }
      }
      return textByIdState;
    }
    case textTypes.TEXT_CREATED_SUCCEEDED: {
      const {
        payload: {
          randomId,
          text,
        },
      } = action;
      const textByIdState = {
        ...state,
        [randomId]: {
          randomId,
          text,
          loading: false,
        }
      }
      return textByIdState;
    }
    case textTypes.TEXT_CREATED_FAILED: {
      const {
        payload: {
          randomId,
        },
      } = action;
      const textByIdState = {...state};
      delete textByIdState[randomId];
      return textByIdState;
    }
    default: {
      return state;
    }
  }
}

const order = (state=[1], action) => {
  switch (action.type) {
    case textTypes.TEXT_CREATED: {
      const {
        payload: {
          randomId,
        },
      } = action;
      const textOrderState = [
        randomId,
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
