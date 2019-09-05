import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import * as actions from '../actions';
import { postLocationService } from '../saga';
import { postLocation } from '../services';

describe('weatherInfo saga test', () => {
  const location = 'Sanepa';
  const action = actions.postLocationRequest(location);
  let gen = cloneableGenerator(postLocationService)(action);
  describe('call mock api, dispatch actions', () => {
    it('should call postlocation success service', () => {
      let generator = gen.clone();
      let expected = call(postLocation, location);
      let actual = generator.next();
      expect(actual.value).toEqual(expected);
      actual = generator.next({
        temp: 300,
        status: 'clear',
        cod: 200,
      });
      expected = put(
        actions.postLocationSuccess(actual.value.payload.action.response)
      );
      expect(actual.value).toMatchObject(expected);
      actual = generator.next();
      expect(actual.done).toBe(true);
    });

    it('should call postlocation failure service', () => {
      let generator = gen.clone();
      let expected = call(postLocation, location);
      let actual = generator.next();
      expect(actual.value).toEqual(expected);
      actual = generator.next({
        msg: 'Invalid address',
        cod: 400,
      });
      expected = put(
        actions.postLocationFailure(actual.value.payload.action.error)
      );
      expect(actual.value).toMatchObject(expected);
      actual = generator.next();
      expect(actual.done).toBe(true);
    });
  });
});
