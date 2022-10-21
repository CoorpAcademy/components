import test from 'ava';
import reducer from '../show-congrats';
import {POST_PROGRESSION_REQUEST} from '../../../actions/api/post-progression';
import {NEXT_SLIDE} from '../../../actions/ui/next-slide';

test('should set state to false when received action is POST_PROGRESSION_REQUEST', t => {
  const state = reducer(true, {type: POST_PROGRESSION_REQUEST});
  t.is(state, false);
});

test('should set state to false when received action is NEXT_SLIDE with nextSlideRef other than successExitNode', t => {
  const state = reducer(undefined, {
    type: NEXT_SLIDE,
    payload: {
      currentSlideRef: '1234',
      nextSlideRef: '5678',
      animationType: 'unstack',
      totalCorrectAnswers: 1,
      answeredSlides: ['1234']
    }
  });
  t.is(state, false);
});

test('should set state to false when received action is NEXT_SLIDE with nextSlideRef successExitNode', t => {
  const state = reducer(false, {
    type: NEXT_SLIDE,
    payload: {
      currentSlideRef: '1234',
      nextSlideRef: 'successExitNode',
      animationType: 'unstack',
      totalCorrectAnswers: 1,
      answeredSlides: ['1234']
    }
  });
  t.is(state, true);
});
