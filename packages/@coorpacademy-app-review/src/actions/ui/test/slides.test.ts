import test from 'ava';
import {services, appendVideoOptions} from '@coorpacademy/review-services-mocks';
import {createTestStore} from '../../test/create-test-store';
import {initialState} from '../../../test/fixtures';
import {setCurrentSlide, SET_CURRENT_SLIDE} from '../slides';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';

const thunkOptions = {services, appendVideoOptions};

test('should dispatch SET_CURRENT_SLIDE action when setCurrentSlide is called', async t => {
  const expectedActions = [{type: SET_CURRENT_SLIDE, payload: freeTextSlide}];

  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedActions);
  await dispatch(setCurrentSlide(freeTextSlide));
});
