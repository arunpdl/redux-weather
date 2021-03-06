import React from 'react';
import { shallow } from 'enzyme';
import Headline from '../index';
import { findByTestAttr, checkProps } from '../../../test-utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [
          {
            fName: 'Test First Name',
            lName: 'Test Last Name',
            age: 25,
            email: 'test@test.com',
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBe(undefined);
    });
  });

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Description',
      };
      wrapper = setUp(props);
    });

    it('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(1);
    });

    it('should render H1', () => {
      const h1 = findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    });

    it('should render description', () => {
      const desc = findByTestAttr(wrapper, 'description');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have No props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('should not render', () => {
      const component = findByTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
