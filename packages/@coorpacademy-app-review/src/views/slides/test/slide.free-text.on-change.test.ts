import test from 'ava';
import omit from 'lodash/fp/omit';
import get from 'lodash/fp/get';
import {mapStateToSlidesProps} from '..';
import {ProgressionFromAPI} from '../../../types/common';
import {services} from '../../../test/util/services.mock';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_BASIC} from '../../../actions/ui/answers';
import {FreeText} from '../../../types/slides';
import {freeTextSlide} from './fixtures/free-text';

const progression: ProgressionFromAPI = {
  _id: '123456789123',
  content: {type: 'skill', ref: '_skill-ref'},
  engine: {
    ref: 'review'
  },
  state: {
    allAnswers: [],
    isCorrect: true,
    nextContent: {
      ref: freeTextSlide._id,
      type: 'slide'
    },
    pendingSlides: [],
    slides: [],
    step: {
      current: 1
    },
    stars: 0
  }
};

const initialState: StoreState = {
  data: {
    progression,
    slides: {
      [freeTextSlide._id]: freeTextSlide
    },
    skills: [],
    token: '1234',
    corrections: {},
    rank: {}
  },
  ui: {
    currentSlideRef: freeTextSlide._id,
    navigation: ['skills', 'slides'],
    answers: {},
    slide: {}
  }
};

test('should dispatch EDIT_BASIC action via the property onChange of a Free Text slide', t => {
  t.plan(2);

  const expectedActions = [
    {
      type: EDIT_BASIC,
      meta: {slideRef: freeTextSlide._id},
      payload: ['My Answer']
    }
  ];
  const {dispatch, getState} = createTestStore(t, initialState, services, expectedActions);

  const props = mapStateToSlidesProps(getState(), dispatch);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    hidden: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });

  const SlideProps = props.stack.slides['0'].answerUI?.model as FreeText;
  const onChange = get('onChange', SlideProps);
  onChange('My Answer');
});
