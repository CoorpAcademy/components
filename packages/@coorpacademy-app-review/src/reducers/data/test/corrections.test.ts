import test from 'ava';
import reducer, {type CorrectionsAction} from '../corrections';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {
  CORRECTION_FETCH_REQUEST,
  CORRECTION_FETCH_SUCCESS
} from '../../../actions/api/fetch-correction';
import {getChoicesCorrection} from '../../../test/util/services.mock';

test('should have an initial empty record value', t => {
  const state = reducer(undefined, {} as CorrectionsAction);
  t.deepEqual(state, {});
});

test("should set the key (slide's id) of the correction to null when a CORRECTION_FETCH_REQUEST is received", t => {
  const slideRef = freeTextSlide.id;
  const state = reducer({}, {type: CORRECTION_FETCH_REQUEST, meta: {slideRef: freeTextSlide.id}});
  t.deepEqual(state, {
    [slideRef]: null
  });
});

test('should set the value of CORRECTION_FETCH_SUCCESS', t => {
  const expectedCorrection = getChoicesCorrection(freeTextSlide.id);
  const state = reducer(
    {},
    {
      type: CORRECTION_FETCH_SUCCESS,
      payload: expectedCorrection,
      meta: {slideRef: freeTextSlide.id}
    }
  );
  t.deepEqual(state, {
    sli_VJYjJnJhg: expectedCorrection
  });
});
