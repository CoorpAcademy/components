import test from 'ava';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import identity from 'lodash/fp/identity';
import {mockTranslate} from '@coorpacademy/translate';
import {popinCorrectionStateToProps} from '../popin-correction';
import popinExtraLife from '../../test/fixtures/popin-correction/popin-extra-life';
import popinFailure from '../../test/fixtures/popin-correction/popin-failure';
import {getCurrentProgressionId} from '../../../utils/state-extract';

test('should put revival to true if current step is extra life and a lesson has been viewed', t => {
  const progressionId = getCurrentProgressionId(popinExtraLife);
  const state = set(
    ['data', 'progressions', 'entities', progressionId, 'state', 'hasViewedAResourceAtThisStep'],
    true,
    popinExtraLife
  );
  const props = popinCorrectionStateToProps({translate: mockTranslate}, {dispatch: identity})(
    state
  );

  t.true(get(['header', 'revival'], props));
});

test('should put revival to false if current step is extra life and a lesson has not been viewed', t => {
  const state = Object.freeze(popinExtraLife);
  const props = popinCorrectionStateToProps({translate: mockTranslate}, {dispatch: identity})(
    state
  );

  t.false(get(['header', 'revival'], props));
});

test('should put revival to false if current step is not extra life, even if lesson has been viewed', t => {
  const progressionId = getCurrentProgressionId(popinFailure);
  const state = set(
    ['data', 'progressions', 'entities', progressionId, 'state', 'hasViewedAResourceAtThisStep'],
    true,
    popinFailure
  );
  const props = popinCorrectionStateToProps({translate: mockTranslate}, {dispatch: identity})(
    state
  );

  t.false(get(['header', 'revival'], props));
});
