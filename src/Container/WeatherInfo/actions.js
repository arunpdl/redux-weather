import * as types from './constants';

export const postLocationRequest = location => {
  return {
    type: types.POST_LOCATION_REQUEST,
    location,
  };
};

export const postLocationSuccess = response => {
  return {
    type: types.POST_LOCATION_SUCCESS,
    response,
  };
};

export const postLocationFailure = error => {
  return {
    type: types.POST_LOCATION_FAILURE,
    error,
  };
};
