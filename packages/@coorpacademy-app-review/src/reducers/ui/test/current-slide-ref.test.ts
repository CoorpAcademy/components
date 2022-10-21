import test from 'ava';
import reducer from '../current-slide-ref';
import {SetCurrentSlideAction, SET_CURRENT_SLIDE} from '../../../actions/ui/slides';
import {POST_PROGRESSION_REQUEST} from '../../../actions/api/post-progression';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';

test('should have initial value', t => {
  const state = reducer(undefined, {} as SetCurrentSlideAction);
  t.is(state, '');
});

test('should set the value of SET_CURRENT_SLIDE action', t => {
  const state = reducer('', {type: SET_CURRENT_SLIDE, payload: freeTextSlide});
  t.is(state, 'sli_VJYjJnJhg');
});

test('should set the initial value when POST_PROGRESSION_REQUEST action is received', t => {
  const state = reducer('sli_VJYjJnJhg', {type: POST_PROGRESSION_REQUEST});
  t.is(state, '');
});
