import { call, put, takeLatest } from 'redux-saga/effects';
import { postLocation } from './services';
import * as types from './constants';
import * as actions from './actions';

export function* postLocationService(action) {
  const response = yield call(postLocation, action.location);
  if (response.cod === 200) {
    yield put(actions.postLocationSuccess(response));
  } else {
    yield put(actions.postLocationFailure(response));
  }
}

export function* weatherInfoSaga() {
  yield takeLatest(types.POST_LOCATION_REQUEST, postLocationService);
}
