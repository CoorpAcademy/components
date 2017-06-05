import test from 'ava';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {fetchSlide, SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS, SLIDE_FETCH_FAILURE} from '../slides';

test(
  'should fetch slide',
  macro,
  {},
  t => ({
    Slides: {
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      }
    }
  }),
  fetchSlide('foo'),
  [
    {
      type: SLIDE_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: SLIDE_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: 'foo'
    }
  ]
);

test(
  'should prevent request if slide already fetched',
  macro,
  set('data.slides.entities.foo', 'foo', {}),
  t => ({
    Slides: {
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      }
    }
  }),
  fetchSlide('foo'),
  [
    {
      type: SLIDE_FETCH_REQUEST,
      meta: {id: 'foo'}
    }
  ]
);

test(
  'should return error if request failed',
  macro,
  {},
  t => ({
    Slides: {
      findById: id => {
        t.is(id, 'foo');
        throw new Error();
      }
    }
  }),
  fetchSlide('foo'),
  [
    {
      type: SLIDE_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: SLIDE_FETCH_FAILURE,
      meta: {id: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);
