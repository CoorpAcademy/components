import test from 'ava';
import set from 'lodash/fp/set';
import identity from 'lodash/fp/identity';
import omit from 'lodash/fp/omit';
import pipe from 'lodash/fp/pipe';
import {mockTranslate} from '@coorpacademy/translate';
import createHeader from '../header';
import basicSlide from './fixtures/slides/basic';

const options = {translate: mockTranslate};
const store = {dispatch: identity};
const headerProps = createHeader(options, store);

const createProgression = slide => ({
  engine: {
    ref: 'microlearning',
    version: '1'
  },
  content: {
    ref: '1.B1',
    type: 'chapter'
  },
  state: {
    nextContent: {
      ref: slide._id,
      type: 'slide'
    },
    lives: 100,
    livesDisabled: false,
    step: {
      current: 1
    },
    viewedResources: []
  }
});

const data = {
  contents: {
    chapter: {
      entities: {
        '1.B2': {
          _id: '1.B2',
          name: 'some-title'
        }
      }
    },
    level: {
      entities: {
        '1.B': {
          name: 'level-with-chapters',
          chapterIds: ['1.B1', '1.B2', '1.B3']
        }
      }
    },
    slide: {
      entities: {
        [basicSlide._id]: {
          chapter_id: '1.B2'
        }
      }
    }
  },
  progressions: {
    entities: {
      basic: createProgression(basicSlide)
    }
  }
};

test('should create header with the number of lives in the state', t => {
  const ui = {current: {progressionId: 'basic'}};
  const state = {data, ui};
  const props = headerProps(state);
  t.deepEqual(props.lives, {
    count: 100
  });
});

test('should read title from the content when available', t => {
  const ui = {current: {progressionId: 'basic'}};
  const state = {data: set('progressions.entities.basic.content.ref', '1.B2', data), ui};
  const props = headerProps(state);

  t.deepEqual(omit('onClick', props.content), {
    title: 'some-title'
  });
});

test('should find chapter details within learner.header.subcontent', t => {
  const ui = {current: {progressionId: 'basic'}};
  const state = {
    data: pipe(
      set('progressions.entities.basic.engine.ref', 'learner'),
      set('progressions.entities.basic.content.type', 'level'),
      set('progressions.entities.basic.content.ref', '1.B')
    )(data),
    ui
  };
  const props = headerProps(state);

  t.deepEqual(props.subcontent, {
    title: 'some-title',
    details: '2/3'
  });
});

test('should set lives to null if lives are disabled in the progression', t => {
  const ui = {current: {progressionId: 'basic'}};
  const state = {data: set('progressions.entities.basic.state.livesDisabled', true, data), ui};
  const props = headerProps(state);

  t.deepEqual(props.lives, false);
});
