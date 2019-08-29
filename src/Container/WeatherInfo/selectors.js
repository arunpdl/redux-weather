import { createSelector } from 'reselect';
import { initialState } from './reducers';

const getWeatherInfo = state => state.weatherInfo || initialState;

export const getSuccessResponse = () =>
  createSelector(
    getWeatherInfo,
    substate => substate.response
  );

export const getErrorResponse = () =>
  createSelector(
    getWeatherInfo,
    substate => substate.error
  );

export const getSuccessStatus = () =>
  createSelector(
    getWeatherInfo,
    substate => substate.success
  );

export const getLoadingStatus = () =>
  createSelector(
    getWeatherInfo,
    substate => substate.loading
  );
