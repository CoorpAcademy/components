import test from 'ava';
import {set, identity, omit, pipe} from 'lodash/fp';

import {mockTranslate} from '@coorpacademy/translate';
import {SHOW_TOURGUIDE} from '@coorpacademy/player-store';
import createHeader from '../header';
import basicSlide from './fixtures/slides/basic';

const options = {translate: mockTranslate, mode: 'scorm'};
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

  t.is(props.lives, false);
});

test('content click should dispatch back', t => {
  const calls = [];
  const dispatch = action => {
    calls.push(action);
    return action;
  };
  const headerWithDispatch = createHeader(options, {dispatch});
  const ui = {current: {progressionId: 'basic'}, route: {basic: 'answer'}};
  const state = {data, ui};
  const props = headerWithDispatch(state);

  props.content.onClick();

  t.is(calls.length, 1);
  t.is(typeof calls[0], 'function');
});

test('should expose help action when eligible', t => {
  const ui = {current: {progressionId: 'basic'}, route: {basic: 'answer'}};
  const state = {data, ui};
  const props = headerProps(state);

  t.truthy(props.help);
  t.is(props.help.title, '__Help');
});

test('should not expose help action when adaptive', t => {
  const ui = {current: {progressionId: 'basic'}, route: {basic: 'answer'}};
  const adaptiveData = set(
    ['contents', 'chapter', 'entities', '1.B2', 'isConditional'],
    true,
    data
  );
  const state = {data: adaptiveData, ui};
  const props = headerProps(state);

  t.is(props.help, null);
});

test('help click should dispatch route change and show action when not on question tab', t => {
  const calls = [];
  const dispatch = action => {
    calls.push(action);
    return action;
  };
  const headerWithDispatch = createHeader(options, {dispatch});
  const ui = {current: {progressionId: 'basic'}, route: {basic: 'clue'}};
  const state = {data, ui};
  const props = headerWithDispatch(state);

  props.help.onClick();

  t.is(calls.length, 2);
  t.is(typeof calls[0], 'function');
  t.is(calls[1].type, SHOW_TOURGUIDE);
});

test('help click should only show when already on question tab', t => {
  const calls = [];
  const dispatch = action => {
    calls.push(action);
    return action;
  };
  const headerWithDispatch = createHeader(options, {dispatch});
  const ui = {current: {progressionId: 'basic'}, route: {basic: 'answer'}};
  const state = {data, ui};
  const props = headerWithDispatch(state);

  props.help.onClick();

  t.is(calls.length, 1);
  t.is(calls[0].type, SHOW_TOURGUIDE);
});

test('header uses default options when none provided', t => {
  const dispatch = identity;
  const headerWithDefaults = createHeader(undefined, {dispatch});
  const ui = {current: {progressionId: 'basic'}, route: {basic: 'answer'}};
  const state = {data, ui};

  const props = headerWithDefaults(state);

  t.is(props.mode, 'default');
});

test('help labels fall back to raw key when translate is missing', t => {
  const dispatch = identity;
  const headerWithDefaults = createHeader({mode: 'scorm'}, {dispatch});
  const ui = {current: {progressionId: 'basic'}, route: {basic: 'answer'}};
  const state = {data, ui};

  const props = headerWithDefaults(state);

  t.truthy(props.help);
  t.is(props.help.title, 'Help');
  t.is(props.help.ariaLabel, 'Help');
});
