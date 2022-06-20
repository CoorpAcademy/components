// @flow
import test from 'ava';
import {keys} from 'lodash/fp';
import type {
  Action,
  AvailableContent,
  GenericContent,
  Engine,
  EngineConfig,
  MoveAction
} from '../../types';
import allSlides from '../../compute-next-step/test/fixtures/slides';
import createProgression from '..';

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
    slides: allSlides,
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
  const content: GenericContent = {
    ref: '1.A1',
    type: 'level'
  };
  const engineOptions: EngineConfig = {
    version: '2',
    livesDisabled: true
  };
  const progression = createProgression(engine, content, engineOptions, availableContentWithRules);
  if (!progression) {
    throw new Error('progression should not be falsy');
  }

  t.deepEqual(keys(progression).sort(), ['actions', 'content', 'engine', 'engineOptions'].sort());
  t.deepEqual(progression.engine, {
    ref: 'learner',
    version: '2'
  });
  t.is(progression.content, content);
  t.is(progression.engineOptions, engineOptions);
  t.true(Array.isArray(progression.actions));
});

test('should create a new progression for external engine', t => {
  const engine: Engine = {
    ref: 'external',
    version: 'latest'
  };
  const content: GenericContent = {
    ref: 'ext_1',
    type: 'scorm'
  };
  const engineOptions: EngineConfig = {
    version: '1'
  };
  const progression = createProgression(engine, content, engineOptions, availableContentWithRules);
  if (!progression) {
    throw new Error('progression should not be falsy');
  }
  t.deepEqual(progression, {
    engine: {ref: 'external', version: '1'},
    content: {ref: 'ext_1', type: 'scorm'},
    engineOptions: {version: '1'},
    actions: []
  });
});

test('should create a new progression for review engine', t => {
  const engine: Engine = {
    ref: 'review',
    version: 'latest'
  };
  const content: GenericContent = {
    ref: 'skill_41BBqFKoS',
    type: 'skill'
  };
  const engineOptions: EngineConfig = {
    version: '1'
  };
  const progression = createProgression(engine, content, engineOptions, availableContentWithRules);
  if (!progression) {
    throw new Error('progression should not be falsy');
  }
  t.deepEqual(progression, {
    engine: {ref: 'review', version: '1'},
    content: {ref: 'skill_41BBqFKoS', type: 'skill'},
    engineOptions: {version: '1'},
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            type: 'slide',
            ref: '1.A1.1'
          },
          instructions: null
        }
      }
    ]
  });
});

test('should create a new progression with a custom version of the engine', t => {
  const engine: Engine = {
    ref: 'learner',
    version: '1'
  };
  const content: GenericContent = {
    ref: '1.A1',
    type: 'level'
  };
  const engineOptions: EngineConfig = {
    version: '1',
    livesDisabled: true
  };
  const progression = createProgression(engine, content, engineOptions, availableContentWithRules);
  if (!progression) {
    throw new Error('progression should not be falsy');
  }

  t.deepEqual(keys(progression).sort(), ['actions', 'content', 'engine', 'engineOptions'].sort());
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
  const content: GenericContent = {
    ref: '1.A1',
    type: 'level'
  };
  const engineOptions: EngineConfig = {
    version: '2',
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
  const content: GenericContent = {
    ref: '1.A1',
    type: 'level'
  };
  const engineOptions: EngineConfig = {
    version: '2',
    livesDisabled: true
  };

  const availableContent: AvailableContent = [
    {
      ref: '1.A1',
      slides: [allSlides.filter(slide => slide.chapter_id === '1.A1')[0]],
      rules: []
    }
  ];

  const progression = createProgression(engine, content, engineOptions, availableContent);
  if (!progression) {
    throw new Error('progression should not be falsy');
  }

  const actions: Array<Action> = progression.actions || [];

  const action: MoveAction = {
    type: 'move',
    payload: {
      instructions: null,
      nextContent: {
        ref: '1.A1.1',
        type: 'slide'
      }
    }
  };

  t.deepEqual(actions, [action]);
});

test('should return null if no there is no available content', t => {
  const engine: Engine = {
    ref: 'learner',
    version: 'latest'
  };
  const content: GenericContent = {
    ref: '1.A1',
    type: 'level'
  };
  const engineOptions: EngineConfig = {
    version: '2',
    livesDisabled: true
  };

  const progression = createProgression(engine, content, engineOptions, []);

  t.deepEqual(progression, {
    engine: {ref: 'learner', version: '2'},
    content: {ref: '1.A1', type: 'level'},
    engineOptions: {version: '2', livesDisabled: true},
    actions: [
      {
        type: 'move',
        payload: {
          nextContent: {
            type: 'success',
            ref: 'successExitNode'
          },
          instructions: null
        }
      }
    ]
  });
});
