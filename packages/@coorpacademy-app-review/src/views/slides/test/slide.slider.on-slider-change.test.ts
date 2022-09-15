import test from 'ava';
import get from 'lodash/fp/get';
import {mapStateToSlidesProps} from '..';
import {services} from '../../../test/util/services.mock';
import {createTestStore} from '../../../actions/test/create-test-store';
import {EDIT_SLIDER} from '../../../actions/ui/answers';
import {QuestionRange} from '../../../types/slides';
// eslint-disable-next-line ava/no-import-test-files
import {initialState} from './slide.slider.on-change.test';

test('should dispatch EDIT_SLIDER action via the property onSliderChange of a Slider slide', t => {
  t.plan(1);

  const expectedActions = [
    {
      type: EDIT_SLIDER,
      payload: ['111']
    }
  ];
  const {dispatch, getState} = createTestStore(t, initialState, services, expectedActions);
  const props = mapStateToSlidesProps(getState(), dispatch);

  const SlideProps = props.stack.slides['0'].answerUI?.model as QuestionRange;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const onSliderChange = get('onSliderChange', SlideProps)!;
  onSliderChange(111);
});
