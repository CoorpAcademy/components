import test from 'ava';
import {freeTextSlide} from '@coorpacademy/review-services/es/mock/fixtures/free-text';
import {qcmSlide} from '@coorpacademy/review-services/es/mock/fixtures/qcm';
import {qcmGraphicSlide} from '@coorpacademy/review-services/es/mock/fixtures/qcm-graphic';
import {sliderSlide} from '@coorpacademy/review-services/es/mock/fixtures/slider';
import {templateSlide} from '@coorpacademy/review-services/es/mock/fixtures/template';
import {POST_PROGRESSION_REQUEST} from '../../../actions/api/post-progression';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../../../actions/api/fetch-slide';
import reducer, {type SlidesAction} from '../slides';

test('should have initial value', t => {
  const state = reducer(undefined, {} as SlidesAction);
  t.deepEqual(state, {});
});

test('should set the value of SLIDE_FETCH_REQUEST action', t => {
  const slideRef = 'sli_VJYjJnJhg';
  const state = reducer({}, {type: SLIDE_FETCH_REQUEST, meta: {slideRef}});
  t.deepEqual(state, {
    [slideRef]: null
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

test('should set the initial value when POST_PROGRESSION_REQUEST action is received', t => {
  const state = reducer(
    {
      [freeTextSlide.universalRef]: freeTextSlide,
      [qcmGraphicSlide.universalRef]: qcmGraphicSlide,
      [qcmSlide.universalRef]: qcmSlide,
      [sliderSlide.universalRef]: sliderSlide,
      [templateSlide.universalRef]: templateSlide
    },
    {type: POST_PROGRESSION_REQUEST}
  );
  t.deepEqual(state, {});
});
