import test from 'ava';
import omit from 'lodash/fp/omit';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import identity from 'lodash/fp/identity';
import {mapStateToSlidesProps} from '..';
import {ProgressionFromAPI} from '../../../types/common';
import {services, translate} from '../../../test/util/services.mock';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_TEMPLATE} from '../../../actions/ui/answers';
import {Template, TextTemplate} from '../../../types/slides';
import {templateSlide} from './fixtures/template';

const connectedOptions = {translate, onQuitClick: identity};
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
    rank: {start: 10, end: Number.NaN}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: templateSlide._id,
    navigation: ['skills', 'slides'],
    answers: {},
    positions: [0, 1, 2, 3, 4],
    slide: {
      [templateSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false
      }
    },
    showQuitPopin: false,
    showButtonRevising: false
  }
};

test('should dispatch EDIT_TEMPLATE action via the property onChange of a Template Text and Select slide', t => {
  t.plan(3);

  const expectedActions = [
    {type: EDIT_TEMPLATE, meta: {slideRef: templateSlide._id}, payload: ['', 'test', '']},
    {type: EDIT_TEMPLATE, meta: {slideRef: templateSlide._id}, payload: ['Catalogue', '', '']}
  ];
  const {dispatch, getState} = createTestStore(t, initialState, {services}, expectedActions);

  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    position: 0,
    loading: false,
    parentContentTitle: '___Content Parent Title',
    questionText: 'Complétez la phrase ci-dessous.'
  });

  const slideProps = props.stack.slides['0'].answerUI?.model as Template;
  const onChangeText = get(['1', 'onChange'], slideProps.answers);
  onChangeText('test');
  const onChangeSelect = get(['0', 'onChange'], slideProps.answers);
  onChangeSelect('Catalogue');
});

test('should dispatch EDIT_TEMPLATE action via the property onChange of a Template Text with previous answer', t => {
  t.plan(4);

  const expectedActions = [
    {type: EDIT_TEMPLATE, meta: {slideRef: templateSlide._id}, payload: ['', '', '']}
  ];
  const {dispatch, getState} = createTestStore(
    t,
    set(['ui', 'answers', templateSlide._id], ['', 'Test', ''], initialState),
    {services},
    expectedActions
  );

  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    position: 0,
    loading: false,
    parentContentTitle: '___Content Parent Title',
    questionText: 'Complétez la phrase ci-dessous.'
  });

  const slideProps = props.stack.slides['0'].answerUI?.model as Template;
  const textAnswerProps = slideProps.answers[1] as TextTemplate;
  t.is(textAnswerProps.value, 'Test');
  const onChangeText = get(['1', 'onChange'], slideProps.answers);
  onChangeText('');

  const newProps = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  const slidePropsAfterOnChange = newProps.stack.slides['0'].answerUI?.model as Template;
  const textAnswerPropsAfterOnChange = slidePropsAfterOnChange.answers[1] as TextTemplate;
  t.is(textAnswerPropsAfterOnChange.value, '');
});
