import test from 'ava';
import reducer from '../positions';
import {POST_PROGRESSION_SUCCESS, ReceivedProgression} from '../../../actions/api/post-progression';
import {NEXT_SLIDE} from '../../../actions/ui/next-slide';

test('should have initial value', t => {
  const state = reducer(undefined, {} as ReceivedProgression);
  t.deepEqual(state, [0, 1, 2, 3, 4]);
});

test('should reset state to initial value when POST_PROGRESSION_SUCCESS action', t => {
  const state = reducer([-1, -1, -1, -1, -1], {
    type: POST_PROGRESSION_SUCCESS
  } as ReceivedProgression);
  t.deepEqual(state, [0, 1, 2, 3, 4]);
});

test('should set position for currentSlide according to the animationType and the position for the next slides', t => {
  const state = reducer([-1, -1, 0, 1, 2], {
    type: NEXT_SLIDE,
    payload: {
      totalCorrectAnswers: 2,
      answeredSlides: ['sli_1', 'sli_2', 'sli_3'],
      currentSlideRef: 'sli_3',
      nextSlideRef: 'sli_4',
      animationType: 'restack'
    }
  });
  t.deepEqual(state, [-1, -1, 2, 0, 1]);

  const _state = reducer([-1, -1, 0, 1, 2], {
    type: NEXT_SLIDE,
    payload: {
      totalCorrectAnswers: 2,
      answeredSlides: ['sli_1', 'sli_2', 'sli_3'],
      currentSlideRef: 'sli_3',
      nextSlideRef: 'sli_4',
      animationType: 'unstack'
    }
  });
  t.deepEqual(_state, [-1, -1, -1, 0, 1]);
});

test('should set position for currentSlide according to the animationType and the position for the next slides when answering already bad slide', t => {
  const state = reducer([-1, 2, -1, 0, 1], {
    type: NEXT_SLIDE,
    payload: {
      totalCorrectAnswers: 2,
      answeredSlides: ['sli_1', 'sli_2', 'sli_3', 'sli_4', 'sli_5'],
      currentSlideRef: 'sli_4',
      nextSlideRef: 'sli_5',
      animationType: 'restack'
    }
  });
  t.deepEqual(state, [-1, 1, -1, 2, 0]);

  const _state = reducer([-1, 1, -1, 2, 0], {
    type: NEXT_SLIDE,
    payload: {
      totalCorrectAnswers: 2,
      answeredSlides: ['sli_1', 'sli_2', 'sli_3', 'sli_4', 'sli_5'],
      currentSlideRef: 'sli_5',
      nextSlideRef: 'sli_1',
      animationType: 'unstack'
    }
  });
  t.deepEqual(_state, [-1, 0, -1, 1, -1]);
});

test('should return same state when nextContent is successExitNode', t => {
  const state = reducer([-1, 0, -1, 1, -1], {
    type: NEXT_SLIDE,
    payload: {
      totalCorrectAnswers: 2,
      answeredSlides: ['sli_1', 'sli_2', 'sli_3', 'sli_4', 'sli_5', 'sli_1'],
      currentSlideRef: 'sli_1',
      nextSlideRef: 'successExitNode',
      animationType: 'unstack'
    }
  });
  t.deepEqual(state, [-1, 0, -1, 1, -1]);
});
