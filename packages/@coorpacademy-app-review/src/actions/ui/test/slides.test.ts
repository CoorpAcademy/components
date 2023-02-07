import test from 'ava';
import {createTestStore} from '../../test/create-test-store';
import {initialState} from '../../../test/fixtures';
import {setCurrentSlide, SET_CURRENT_SLIDE} from '../slides';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';

test('should dispatch SET_CURRENT_SLIDE action when setCurrentSlide is called', async t => {
  const expectedActions = [{type: SET_CURRENT_SLIDE, payload: freeTextSlide}];

  const {dispatch} = createTestStore(t, initialState, {}, expectedActions);
  await dispatch(setCurrentSlide(freeTextSlide));
});
