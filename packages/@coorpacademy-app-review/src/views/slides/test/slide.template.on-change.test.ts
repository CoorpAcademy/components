import test from 'ava';
import omit from 'lodash/fp/omit';
import get from 'lodash/fp/get';
import {mapStateToSlidesProps} from '..';
import {ProgressionFromAPI} from '../../../types/common';
import {services} from '../../../test/util/services.mock';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_TEMPLATE} from '../../../actions/ui/answers';
import {Template} from '../../../types/slides';
import {templateSlide} from './fixtures/template';

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
      ref: templateSlide._id,
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
      [templateSlide._id]: templateSlide
    },
    skills: [],
    token: '1234',
    corrections: {},
    rank: {}
  },
  ui: {
    currentSlideRef: templateSlide._id,
    navigation: ['skills', 'slides'],
    answers: {},
    slide: {}
  }
};

test('should dispatch EDIT_TEMPLATE action via the property onChange of a Template Text slide', t => {
  t.plan(2);

  const expectedActions = [
    {type: EDIT_TEMPLATE, meta: {slideRef: templateSlide._id}, payload: ['', 'test', '']}
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
    questionText: 'Complétez la phrase ci-dessous.'
  });

  const SlideProps = props.stack.slides['0'].answerUI?.model as Template;
  const onChange = get(['1', 'onChange'], SlideProps.answers);
  onChange('test');
});

test('should dispatch EDIT_TEMPLATE action via the property onChange of a Template Select slide', t => {
  t.plan(2);

  const expectedActions = [
    {type: EDIT_TEMPLATE, meta: {slideRef: templateSlide._id}, payload: ['Catalogue', '', '']}
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
    questionText: 'Complétez la phrase ci-dessous.'
  });

  const SlideProps = props.stack.slides['0'].answerUI?.model as Template;
  const onChange = get(['0', 'onChange'], SlideProps.answers);
  onChange('Catalogue');
});
