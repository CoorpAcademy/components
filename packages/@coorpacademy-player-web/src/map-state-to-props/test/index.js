import test from 'ava';
import {map, get, set, pipe, fromPairs, identity} from 'lodash/fp';
import {mockTranslate} from '@coorpacademy/translate';
import createPlayer from '../player';

import qcmSlide from './fixtures/slides/qcm';
import qcmDragSlide from './fixtures/slides/qcm-drag';

const createProgression = (slide, contentRef) => ({
  engine: {
    ref: 'microlearning',
    version: '1'
  },
  content: {
    ref: contentRef,
    type: 'chapter'
  },
  state: {
    nextContent: {
      ref: slide._id,
      type: 'slide'
    },
    lives: 1,
    livesDisabled: false,
    step: {
      current: 1
    },
    viewedResources: []
  }
});

const options = {translate: mockTranslate};
const store = {dispatch: identity};

const availableSlides = pipe(
  map(slide => [slide._id, slide]),
  fromPairs
)([qcmSlide, qcmDragSlide]);

const data = {
  contents: {
    chapter: {
      entities: {
        nonAdaptiveContent: {
          _id: 'nonAdaptiveContent',
          isConditional: false
        },
        adaptiveContent: {
          _id: 'adaptiveContent',
          isConditional: true
        }
      }
    },
    slide: {
      entities: availableSlides
    }
  },
  progressions: {
    entities: {
      qcm: createProgression(qcmSlide, 'nonAdaptiveContent'),
      qcmDrag: createProgression(qcmDragSlide, 'nonAdaptiveContent')
    }
  }
};

test('memoize choices > QCM', t => {
  // state fixture
  const initialState = {
    data,
    ui: {
      route: {qcm: 'answer'},
      current: {progressionId: 'qcm'},
      coaches: {availableCoaches: 1}
    }
  };
  const secondState = set(
    ['data', 'contents', 'slide', 'entities', 'qcmSlide-1', 'question', 'content', 'choices'],
    [
      {
        label: 'foo'
      },
      {
        label: 'bar'
      }
    ],
    {...initialState}
  );
  const thirdState = set(
    ['data', 'contents', 'slide', 'entities', 'qcmSlide-1', 'question', 'content', 'choices'],
    [
      {
        label: '1'
      },
      {
        label: '2'
      }
    ],
    {...initialState}
  );

  // initiate player
  const createPlayerProps = createPlayer(options, store);

  // test answers values
  const props = createPlayerProps(initialState);
  const expected = map('title', get(['answerType', 'model', 'answers'], props));
  t.deepEqual(expected, ['Case 1', 'Case 2', 'Case 3', 'Case 4']);

  // test new answers values when state is updated
  const props2 = createPlayerProps(secondState);
  const expected2 = map('title', get(['answerType', 'model', 'answers'], props2));
  t.deepEqual(expected2, ['foo', 'bar']);

  // new player instance
  const createNewPlayerInstance = createPlayer(options, store);

  // test new answers values when store and state are updated
  const props3 = createNewPlayerInstance(thirdState);
  const expected3 = map('title', get(['answerType', 'model', 'answers'], props3));
  t.deepEqual(expected3, ['1', '2']);
});

test('memoize choices > QCM DRAG', t => {
  // state fixture
  const initialState = {
    data,
    ui: {
      route: {qcmDrag: 'answer'},
      current: {progressionId: 'qcmDrag'},
      coaches: {availableCoaches: 1}
    }
  };
  const secondState = set(
    ['data', 'contents', 'slide', 'entities', '8.B2.2', 'question', 'content', 'choices'],
    [
      {
        label: 'foo'
      },
      {
        label: 'bar'
      }
    ],
    {...initialState}
  );
  const thirdState = set(
    ['data', 'contents', 'slide', 'entities', '8.B2.2', 'question', 'content', 'choices'],
    [
      {
        label: '1'
      },
      {
        label: '2'
      }
    ],
    {...initialState}
  );

  // initiate player
  const createPlayerProps = createPlayer(options, store);

  // test answers values
  const props = createPlayerProps(initialState);
  const expected = map('title', get(['answerType', 'model', 'answers'], props));
  t.deepEqual(expected, ["L'ordinateur", 'La tablette', 'Le smartphone']);

  // test new answers values when state is updated
  const props2 = createPlayerProps(secondState);

  const expected2 = map('title', get(['answerType', 'model', 'answers'], props2));
  t.deepEqual(expected2, ['foo', 'bar']);

  // new player instance
  const createNewPlayerInstance = createPlayer(options, store);

  // test new answers values when store and state are updated
  const props3 = createNewPlayerInstance(thirdState);
  const expected3 = map('title', get(['answerType', 'model', 'answers'], props3));
  t.deepEqual(expected3, ['1', '2']);
});
