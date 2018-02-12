// @flow
import test from 'ava';
import map from 'lodash/fp/map';
import omit from 'lodash/fp/omit';
import type {AvailableContent, Content, Engine, EngineOptions} from '../../types';
import createProgression from '..';
import allSlides from '../../compute-next-step/test/fixtures/slides';

const availableContentWithSlides: AvailableContent = [
  {
    ref: '1.A1',
    slides: allSlides.filter(slide => slide.chapter_id === '1.A1'),
    rules: []
  },
  {
    ref: '2.A1',
    slides: allSlides.filter(slide => slide.chapter_id === '2.A1'),
    rules: []
  }
];

const initialRule = {
  source: {
    type: 'slide',
    ref: ''
  },
  destination: {
    type: 'slide',
    ref: '1.A1.1'
  },
  instructions: [
    {
      field: 'foo',
      type: 'set',
      value: 0
    }
  ],
  conditions: [],
  priority: 10
};

const availableContentWithRules: AvailableContent = [
  {
    ref: '1.A1',
    slides: [],
    rules: [
      initialRule,
      {
        source: {
          type: 'slide',
          ref: '1.A1.1'
        },
        destination: {
          type: 'slide',
          ref: '1.A1.2'
        },
        instructions: [],
        conditions: [],
        priority: 10
      }
    ]
  }
];

test('should create a new progression with the latest version of the engine and the given engine options', t => {
  const engine: Engine = {
    ref: 'learner',
    version: 'latest'
  };
  const content: Content = {
    ref: '1.A1',
    type: 'module'
  };
  const engineOptions: EngineOptions = {
    livesDisabled: true
  };
  const progression = createProgression(engine, content, engineOptions, availableContentWithRules);
  if (!progression) {
    throw new Error('progression should not be falsy');
  }

  t.deepEqual(
    Object.keys(progression).sort(),
    ['actions', 'content', 'engine', 'engineOptions'].sort()
  );
  t.deepEqual(progression.engine, {
    ref: 'learner',
    version: '1'
  });
  t.is(progression.content, content);
  t.is(progression.engineOptions, engineOptions);
  t.true(Array.isArray(progression.actions));
});

test("progression should have 'move' action that links to the initial rule's destination in adaptive", t => {
  const engine: Engine = {
    ref: 'learner',
    version: 'latest'
  };
  const content: Content = {
    ref: '1.A1',
    type: 'module'
  };
  const engineOptions: EngineOptions = {
    livesDisabled: true
  };
  const progression = createProgression(engine, content, engineOptions, availableContentWithRules);
  if (!progression) {
    throw new Error('progression should not be falsy');
  }
  t.deepEqual(progression.actions, [
    {
      type: 'move',
      payload: {
        nextContent: initialRule.destination,
        instructions: initialRule.instructions
      }
    }
  ]);
});

test('progression should have "move" action that links to a random slide from the first chapter in non-adaptive', t => {
  const engine: Engine = {
    ref: 'learner',
    version: 'latest'
  };
  const content: Content = {
    ref: '1.A1',
    type: 'module'
  };
  const engineOptions: EngineOptions = {
    livesDisabled: true
  };
  const progression = createProgression(engine, content, engineOptions, availableContentWithSlides);
  if (!progression) {
    throw new Error('progression should not be falsy');
  }
  t.deepEqual(map(omit(['payload.nextContent.ref']), progression.actions), [
    {
      type: 'move',
      payload: {
        instructions: null,
        nextContent: {
          type: 'slide'
        }
      }
    }
  ]);
  // $FlowFixMe
  t.regex(progression.actions[0].payload.nextContent.ref, /^1\.A1\.[1-9]+$/);
});

test('should return null if no there is no available content', t => {
  const engine: Engine = {
    ref: 'learner',
    version: 'latest'
  };
  const content: Content = {
    ref: '1.A1',
    type: 'module'
  };
  const engineOptions: EngineOptions = {
    livesDisabled: true
  };
  t.is(createProgression(engine, content, engineOptions, []), null);
});
