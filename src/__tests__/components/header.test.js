import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../utils';
import Header, { customPropTypes } from '../../components/Header';

const setUp = ({
  props,
  initialState,
}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Header.WrappedComponent {...props} store={store} />)//.childAt(0).dive();
  return { wrapper, customPropTypes};
};

describe('Header Component', () => {

  describe('Should Render', () => {
    let component;
    beforeEach(() => {
      component = setUp({
        props: {
          registerText: jest.fn(),
        }
      }); 
    });
  
    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'headerComponent');
      expect(wrapper.length).toBe(1);
    });
  });


  describe('Checking PropTypes', () => {
    let component;
    beforeEach(() => {
      component = setUp({
        props: {
          registerText: jest.fn(),
        }
      }); 
    });

    it('Should not throw a warning', () => {
        const expectedProps = {
          registerText: jest.fn(),
        };
        const propsErr = checkProps(component, expectedProps)
        expect(propsErr).toBeUndefined();
    });
  });

});