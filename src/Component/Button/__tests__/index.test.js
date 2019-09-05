import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test-utils';
import Button from '../index';

describe('Button Component', () => {
  describe('Checking proptypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        text: 'Test Text',
        disabled: false,
        handleSubmit: () => {},
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        text: 'Test Text',
        handleSubmit: () => {},
      };
      wrapper = shallow(<Button {...props} />);
    });

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});
