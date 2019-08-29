import * as types from './constants';
import produce from 'immer';

export const initialState = {
  loading: false,
  success: false,
  response: {},
  error: {},
};

const weatherInfoReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case types.POST_LOCATION_REQUEST:
        draft.loading = true;
        break;
      case types.POST_LOCATION_SUCCESS:
        draft.loading = false;
        draft.response = action.response;
        draft.success = true;
        draft.error = {};
        break;
      case types.POST_LOCATION_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        draft.response = {};
        draft.success = false;
        break;
    }
  });

export default weatherInfoReducer;
