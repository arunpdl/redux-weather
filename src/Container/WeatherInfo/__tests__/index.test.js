import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../../test-utils';
import WeatherInfo from '../index';

const setUp = (initialState = {}) => {
  const testStore = configureStore;
};

describe('WeatherInfo Container', () => {
  describe('Checking prop-types', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        successResponse: {},
        errorResponse: {},
        loading: false,
        success: true,
      };
      const propsError = checkProps(WeatherInfo, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
