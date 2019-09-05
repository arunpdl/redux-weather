import checkPropTypes from 'check-prop-types';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsError;
};
