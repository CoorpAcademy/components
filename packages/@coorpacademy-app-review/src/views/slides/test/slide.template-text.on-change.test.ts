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
import {textTemplateSlide} from './fixtures/text-template';
import {selectTemplateSlide} from './fixtures/select-template';

test('should dispatch EDIT_TEMPLATE action via the property onChange of a Template Text slide', t => {
  t.plan(2);

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
        ref: textTemplateSlide.id,
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
        [textTemplateSlide.id]: textTemplateSlide
      },
      skills: [],
      token: '1234'
    },
    ui: {
      currentSlideRef: textTemplateSlide.id,
      navigation: ['skills', 'slides'],
      answers: [],
      slide: {
        validateButton: false
      }
    }
  };

  const expectedActions = [{type: EDIT_TEMPLATE, payload: ['text']}];
  const {dispatch, getState} = createTestStore(t, initialState, services, expectedActions);

  const props = mapStateToSlidesProps(getState(), dispatch);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    hidden: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Using redux" chapter',
    questionText: 'Comment le protégé doit-il percevoir son mentor ?'
  });

  const SlideProps = props.stack.slides['0'].answerUI?.model as Template;
  const onChange = get(['0', 'onChange'], SlideProps.answers);
  onChange('text');
});

test('should dispatch EDIT_TEMPLATE action via the property onChange of a Template Select slide', t => {
  t.plan(2);

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
        ref: selectTemplateSlide.id,
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
        [selectTemplateSlide.id]: selectTemplateSlide
      },
      skills: [],
      token: '1234'
    },
    ui: {
      currentSlideRef: selectTemplateSlide.id,
      navigation: ['skills', 'slides'],
      answers: [],
      slide: {
        validateButton: false
      }
    }
  };

  const expectedActions = [{type: EDIT_TEMPLATE, payload: ['text']}];
  const {dispatch, getState} = createTestStore(t, initialState, services, expectedActions);

  const props = mapStateToSlidesProps(getState(), dispatch);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    hidden: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText: 'Complétez la phrase ci-dessous.'
  });

  const SlideProps = props.stack.slides['0'].answerUI?.model as Template;
  const onChange = get(['0', 'onChange'], SlideProps.answers);
  onChange('text');
});
