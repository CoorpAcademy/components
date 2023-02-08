import test from 'ava';
import omit from 'lodash/fp/omit';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import identity from 'lodash/fp/identity';
import type {ProgressionFromAPI} from '@coorpacademy/review-services';
import {SKILL_REF_FOR_DEFAULT_SLIDES} from '@coorpacademy/review-services-mocks';
import {mapStateToSlidesProps} from '..';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_TEMPLATE} from '../../../actions/ui/answers';
import {Template, TextTemplate} from '../../../types/slides';
import {translate} from '../../../test/utils/translation.mock';
import {templateSlide} from './fixtures/template';
import {skin} from './fixtures/skin';

const connectedOptions = {translate, onQuitClick: identity, skin};

const progression: ProgressionFromAPI = {
  _id: '123456789123',
  content: {type: 'skill', ref: SKILL_REF_FOR_DEFAULT_SLIDES},
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
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
    videos: {}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: templateSlide._id,
    navigation: ['slides'],
    answers: {},
    positions: [0, 1, 2, 3, 4],
    slide: {
      [templateSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        pendingAnswerRequest: false
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
  const {dispatch, getState} = createTestStore(t, initialState, {}, expectedActions);

  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    disabledContent: false,
    position: 0,
    loading: false,
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Developing the review app","contentType":"course"}',
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
    {},
    expectedActions
  );

  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    disabledContent: false,
    position: 0,
    loading: false,
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Developing the review app","contentType":"course"}',
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
