import * as types from '../../types/text';
import textReducer from '../../reducers/text';

describe('Text Reducer', () => {

    it('Should return default state', () => {
      const newState = textReducer(undefined, {});
      expect(newState).toEqual({
        byId: {},
        order: []
      });
    });

    it('Checking text creation', () => {

      const newState2 = textReducer({
        byId: {
          1: {
            text: "test content",
            id: 1,
            loading: true,
          }
        },
        order: [1],
      }, {
        type: types.TEXT_CREATED_SUCCEEDED,
        payload: {
          text: "test content",
          id: 1,
          palindrome: true,
        }
      });

      expect(newState2).toEqual({
        byId: {
          1: {
            text: "test content",
            id: 1,
            loading: false,
            palindrome: true,
          }
        },
        order: [1]
      });

      const newState3 = textReducer({
        order: [1]
      }, {
        type: types.TEXT_CREATED_FAILED,
        payload: {
          id: 1,
        }
      });
      expect(newState3).toEqual({
        byId: {},
        order: []
      });

    });

});