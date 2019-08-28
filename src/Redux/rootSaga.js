import { all } from 'redux-saga/effects';
import { weatherInfoSaga } from '../Container/WeatherInfo/saga';

export default function* rootSaga() {
  yield all([weatherInfoSaga()]);
}
