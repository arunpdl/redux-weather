import * as types from '../constants';
import * as actions from '../actions';

describe('WeatherInfo Actions', () => {
  it('should create action POST_LOCATION_REQUEST', () => {
    const location = 'Kathmandu';
    const expectedAction = {
      type: types.POST_LOCATION_REQUEST,
      location,
    };
    expect(actions.postLocationRequest(location)).toEqual(expectedAction);
  });
  it('should create action POST_LOCATION_SUCCESS', () => {
    const response = { temparature: 300, pressure: 180, status: 'Cloudy' };
    const expectedAction = {
      type: types.POST_LOCATION_SUCCESS,
      response,
    };
    expect(actions.postLocationSuccess(response)).toEqual(expectedAction);
  });
  it('should create action POST_LOCATION_FAILURE', () => {
    const error = { message: 'Invalid location', cod: 400 };
    const expectedAction = {
      type: types.POST_LOCATION_FAILURE,
      error,
    };
    expect(actions.postLocationFailure(error)).toEqual(expectedAction);
  });
});
