import test from 'ava';
import set from 'lodash/fp/set';
import identity from 'lodash/fp/identity';
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
          name: 'some-title'
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

  t.deepEqual(props, {
    backHref: '/',
    primary: {
      title: ''
    },
    lives: {
      count: 100
    }
  });
});

test('should read title from the content when available', t => {
  const ui = {current: {progressionId: 'basic'}};
  const state = {data: set('progressions.entities.basic.content.ref', '1.B2', data), ui};
  const props = headerProps(state);

  t.deepEqual(props, {
    backHref: '/',
    primary: {
      title: 'some-title'
    },
    lives: {
      count: 100
    }
  });
});

test('should set lives to null if lives are disabled in the progression', t => {
  const ui = {current: {progressionId: 'basic'}};
  const state = {data: set('progressions.entities.basic.state.livesDisabled', true, data), ui};
  const props = headerProps(state);

  t.deepEqual(props, {
    backHref: '/',
    primary: {
      title: ''
    },
    lives: {
      count: null
    }
  });
});
