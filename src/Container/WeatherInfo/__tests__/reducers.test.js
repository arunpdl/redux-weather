import * as types from '../constants';
import weatherReducer, { initialState } from '../reducers';

describe('Weather Reducer', () => {
  it('should return default state', () => {
    const newState = weatherReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should handle POST_LOCATION_REQUEST', () => {
    const newState = weatherReducer(initialState, {
      type: types.POST_LOCATION_REQUEST,
      location: { loading: true },
    });
    expect(newState).toEqual({
      loading: true,
      success: false,
      error: {},
      response: {},
    });
  });
  it('should handle POST_LOCATION_SUCCESS', () => {
    const newState = weatherReducer(initialState, {
      type: types.POST_LOCATION_SUCCESS,
      response: {
        temperature: 40,
        wind: 320,
        status: 'Cloudy',
      },
    });
    expect(newState).toEqual({
      loading: false,
      success: true,
      error: {},
      response: { temperature: 40, wind: 320, status: 'Cloudy' },
    });
  });
  it('should handle POST_LOCATION_FAILURE', () => {
    const newState = weatherReducer(initialState, {
      type: types.POST_LOCATION_FAILURE,
      error: {
        message: 'Invalid Address',
      },
    });
    expect(newState).toEqual({
      loading: false,
      success: false,
      error: { message: 'Invalid Address' },
      response: {},
    });
  });
});
