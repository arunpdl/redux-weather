import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test-utils';
import Header from '../index';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const logo = findByTestAttr(component, 'logoImg');
    expect(logo.length).toBe(1);
  });
});
