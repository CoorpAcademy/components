import test from 'ava';
import reducer, {type CorrectionsAction} from '../corrections';
import {
  CORRECTION_FETCH_REQUEST,
  CORRECTION_FETCH_SUCCESS
} from '../../../actions/api/fetch-correction';
import {POST_PROGRESSION_REQUEST} from '../../../actions/api/post-progression';
import {getChoicesCorrection} from '../../../test/util/services.mock';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {qcmSlide} from '../../../views/slides/test/fixtures/qcm';
import {sliderSlide} from '../../../views/slides/test/fixtures/slider';
import {templateSlide} from '../../../views/slides/test/fixtures/template';

test('should have an initial empty record value', t => {
  const state = reducer(undefined, {} as CorrectionsAction);
  t.deepEqual(state, {});
});

test("should set the key (slide's id) of the correction to null when a CORRECTION_FETCH_REQUEST is received", t => {
  const slideRef = freeTextSlide._id;
  const state = reducer({}, {type: CORRECTION_FETCH_REQUEST, meta: {slideRef: freeTextSlide._id}});
  t.deepEqual(state, {
    [slideRef]: null
  });
});

test('should set the value of CORRECTION_FETCH_SUCCESS', t => {
  const expectedCorrection = getChoicesCorrection(freeTextSlide._id);
  const state = reducer(
    {},
    {
      type: CORRECTION_FETCH_SUCCESS,
      payload: expectedCorrection,
      meta: {slideRef: freeTextSlide._id}
    }
  );
  t.deepEqual(state, {
    sli_VJYjJnJhg: expectedCorrection
  });
});

test('should have an initial empty record value when POST_PROGRESSION_REQUEST action is received', t => {
  const expectedCorrections = {
    [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id),
    [qcmGraphicSlide.universalRef]: getChoicesCorrection(qcmGraphicSlide._id),
    [qcmSlide.universalRef]: getChoicesCorrection(qcmSlide._id),
    [sliderSlide.universalRef]: getChoicesCorrection(sliderSlide._id),
    [templateSlide.universalRef]: getChoicesCorrection(templateSlide._id)
  };
  const state = reducer(expectedCorrections, {type: POST_PROGRESSION_REQUEST});
  t.deepEqual(state, {});
});
