import test from 'ava';
import {POST_PROGRESSION_REQUEST} from '../../../actions/api/post-progression';
import {SLIDE_FETCH_SUCCESS} from '../../../actions/api/fetch-slide';
import reducer, {type SlidesAction} from '../slides';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmSlide} from '../../../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {sliderSlide} from '../../../views/slides/test/fixtures/slider';
import {templateSlide} from '../../../views/slides/test/fixtures/template';

test('should have initial value', t => {
  const state = reducer(undefined, {} as SlidesAction);
  t.deepEqual(state, {});
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
