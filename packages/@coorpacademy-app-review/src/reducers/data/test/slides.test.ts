import test from 'ava';
import reducer, {type SlidesAction} from '../slides';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../../../actions/api/fetch-slide';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';

test('should have inital value', t => {
  const state = reducer(undefined, {} as SlidesAction);
  t.deepEqual(state, {});
});

test('should set the value of SLIDE_FETCH_REQUEST action', t => {
  const state = reducer({}, {type: SLIDE_FETCH_REQUEST, meta: {slideRef: 'slideRef'}});
  t.deepEqual(state, {
    slideRef: null
  });
});

test('should set the value of SLIDE_FETCH_SUCCESS action', t => {
  const state = reducer(
    {},
    {type: SLIDE_FETCH_SUCCESS, payload: freeTextSlide, meta: {slideRef: 'sli_VJYjJnJhg'}}
  );
  t.deepEqual(state, {
    sli_VJYjJnJhg: freeTextSlide
  });
});
