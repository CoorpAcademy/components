import test from 'ava';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import identity from 'lodash/fp/identity';
import {mockTranslate} from '@coorpacademy/translate';
import {getCurrentProgressionId} from '@coorpacademy/player-store/es/utils/state-extract';
import {popinCorrectionStateToProps} from '../popin-correction';
import popinExtraLife from './fixtures/popin-correction/popin-extra-life';
import popinFailure from './fixtures/popin-correction/popin-failure';

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

  t.true(get('extraLifeGranted', props));
  t.is(props.quit, undefined);
});

test('should put revival to false if current step is extra life and a lesson has not been viewed', t => {
  const state = Object.freeze(popinExtraLife);
  const props = popinCorrectionStateToProps({translate: mockTranslate}, {dispatch: identity})(
    state
  );

  t.false(get('extraLifeGranted', props));
  t.is(get('quit.cta.title', props), '__Quit');
  t.is(props.header.type, 'popinCorrection');
  t.deepEqual(get('overlay', props), {
    title: '__Bonus!',
    text: '__Get an extra life by viewing the lesson',
    lifeAmount: 1
  });
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

  t.false(get('extraLifeGranted', props));
  t.is(props.header.type, 'popinCorrection');
  t.is(props.quit, undefined);
  t.is(props.overlay, undefined);
});
