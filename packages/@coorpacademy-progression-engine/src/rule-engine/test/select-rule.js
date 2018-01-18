// @flow
import test from 'ava';
import type {Content, GenericState} from '../../../types';
import selectRule, {DEFAULT_SOURCE} from '../select-rule';
import type {ChapterRule} from '../types';

const createState = (content): GenericState => ({
  content,
  lives: 3,
  stars: 0,
  livesDisabled: true,
  isCorrect: true,
  slides: [],
  requestedClues: [],
  viewedResources: [],
  step: {
    current: 0
  },
  remainingLifeRequests: 0,
  allAnswers: [],
  hasViewedAResourceAtThisStep: false,
  variables: {}
});

test('should return null if no rules match', t => {
  const state = createState({type: 'slide', ref: ''});
  const rule = selectRule([], state);
  t.is(rule, null);
});

const source: Content = {
  type: 'slide',
  ref: '1.A1.1'
};
const destination: Content = {
  type: 'slide',
  ref: '1.A1.2'
};

const defaultState: GenericState = {
  content: source,
  lives: 2,
  stars: 0,
  livesDisabled: true,
  isCorrect: true,
  slides: [],
  requestedClues: [],
  viewedResources: [],
  step: {
    current: 0
  },
  variables: {},
  remainingLifeRequests: 0,
  allAnswers: [],
  hasViewedAResourceAtThisStep: false
};

const chapterRules: Array<ChapterRule> = [
  {
    source: destination,
    destination: source,
    instructions: [],
    conditions: [
      {
        target: {
          scope: 'variable',
          field: 'lives'
        },
        operator: 'EQUALS',
        values: [2]
      }
    ],
    priority: 0,
    ref: '1'
  },
  {
    source,
    destination,
    instructions: [],
    conditions: [
      {
        target: {
          scope: 'variable',
          field: 'lives'
        },
        operator: 'EQUALS',
        values: [2]
      }
    ],
    priority: 2,
    ref: 'low_priority'
  },
  {
    source,
    destination,
    instructions: [],
    conditions: [
      {
        target: {
          scope: 'variable',
          field: 'lives'
        },
        operator: 'EQUALS',
        values: [2]
      }
    ],
    priority: 0,
    ref: 'high_priority'
  },
  {
    source,
    destination,
    instructions: [],
    conditions: [
      {
        target: {
          scope: 'variable',
          field: 'lives'
        },
        operator: 'EQUALS',
        values: [2]
      }
    ],
    priority: 1,
    ref: 'mid_priority'
  },
  {
    source: DEFAULT_SOURCE,
    destination,
    instructions: [],
    conditions: [
      {
        target: {
          scope: 'variable',
          field: 'lives'
        },
        operator: 'EQUALS',
        values: [2]
      }
    ],
    priority: 0,
    ref: '3'
  }
];

test('should select right chapter from source and priority', t => {
  const state = defaultState;

  const actualChapterRule = selectRule(chapterRules, state) || {};

  t.is(actualChapterRule.ref, 'high_priority');
});

test('should select chapterRule with empty source if state has no content', t => {
  const state = {...defaultState, content: undefined};

  const actualChapterRule = selectRule(chapterRules, state) || {};

  t.is(actualChapterRule.ref, '3');
});

test('should return no chapterRule if any match', t => {
  const state = {...defaultState, content: {type: 'slide', ref: 'noop'}};

  const actualChapterRule = selectRule(chapterRules, state);
  t.is(actualChapterRule, null);
});

test("should select chapterRule with 'slide' scope", t => {
  const slideScopedRules = [
    {
      source,
      destination,
      instructions: [],
      conditions: [
        {
          target: {
            scope: 'slide',
            ref: '1.A1.1',
            field: 'answer'
          },
          operator: 'EQUALS',
          values: [['foo']]
        }
      ],
      priority: 0,
      ref: 'answer'
    },
    {
      source,
      destination,
      instructions: [],
      conditions: [
        {
          target: {
            scope: 'slide',
            ref: '1.A1.1',
            field: 'isCorrect'
          },
          operator: 'EQUALS',
          values: [true]
        }
      ],
      priority: 0,
      ref: 'isCorrect'
    }
  ];

  const answerState = {
    ...defaultState,
    allAnswers: [
      {
        slideRef: '1.A1.1',
        answer: ['foo'],
        isCorrect: false
      }
    ]
  };
  const answerChapterRule = selectRule(slideScopedRules, answerState);
  t.is(
    (answerChapterRule || {}).ref,
    'answer',
    "Don't support 'slide' scoped target with 'answer' field"
  );
  const noAnswerState = {
    ...defaultState,
    allAnswers: []
  };
  const noAnswerChapterRule = selectRule(slideScopedRules, noAnswerState);
  t.is(noAnswerChapterRule, null, "Don't support 'slide' scoped target with 'answer' field");

  const isCorrectState = {
    ...defaultState,
    allAnswers: [
      {
        slideRef: '1.A1.1',
        answer: ['bar'],
        isCorrect: true
      }
    ]
  };
  const isCorrectChapterRule = selectRule(slideScopedRules, isCorrectState);
  t.is(
    (isCorrectChapterRule || {}).ref,
    'isCorrect',
    "Don't support 'slide' scoped target with 'isCorrect' field"
  );
  const noIsCorrectState = {
    ...defaultState,
    allAnswers: [
      {
        slideRef: '1.A1.1',
        answer: ['bar'],
        isCorrect: false
      }
    ]
  };
  const noIsCorrectChapterRule = selectRule(slideScopedRules, noIsCorrectState);
  t.is(noIsCorrectChapterRule, null, "Don't support 'slide' scoped target with 'isCorrect' field");
});

test("should select chapterRule with 'variables' scope", t => {
  const slideScopedRules = [
    {
      source,
      destination,
      instructions: [],
      conditions: [
        {
          target: {
            scope: 'variable',
            field: 'foo'
          },
          operator: 'EQUALS',
          values: [1]
        }
      ],
      priority: 0,
      ref: 'lives'
    },
    {
      source,
      destination,
      instructions: [],
      conditions: [
        {
          target: {
            scope: 'variable',
            field: 'lives'
          },
          operator: 'GTE',
          values: [42]
        }
      ],
      priority: 0,
      ref: 'lives'
    },
    {
      source,
      destination,
      instructions: [],
      conditions: [
        {
          target: {
            scope: 'variable',
            field: 'stars'
          },
          operator: 'LTE',
          values: [-1]
        }
      ],
      priority: 0,
      ref: 'stars'
    },
    {
      source,
      destination,
      instructions: [],
      conditions: [
        {
          target: {
            scope: 'variable',
            field: 'custom'
          },
          operator: 'BETWEEN',
          values: [41, 43]
        }
      ],
      priority: 0,
      ref: 'custom'
    }
  ];

  const livesState = {
    ...defaultState,
    lives: 42
  };
  const livesChapterRule = selectRule(slideScopedRules, livesState);
  t.is(
    (livesChapterRule || {}).ref,
    'lives',
    "Don't support 'variable' scoped target with 'lives' field"
  );
  const noLivesState = defaultState;
  const noLivesChapterRule = selectRule(slideScopedRules, noLivesState);
  t.is(noLivesChapterRule, null, "Don't support 'variable' scoped target with 'lives' field");

  const starsState = {
    ...defaultState,
    stars: -1
  };
  const starsChapterRule = selectRule(slideScopedRules, starsState);
  t.is(
    (starsChapterRule || {}).ref,
    'stars',
    "Don't support 'variable' scoped target with 'stars' field"
  );
  const noStarsState = defaultState;
  const noStarsChapterRule = selectRule(slideScopedRules, noStarsState);
  t.is(noStarsChapterRule, null, "Don't support 'variable' scoped target with 'stars' field");

  const customState = {
    ...defaultState,
    variables: {custom: 42}
  };
  const customChapterRule = selectRule(slideScopedRules, customState);
  t.is(
    (customChapterRule || {}).ref,
    'custom',
    "Don't support 'variable' scoped target with custom field"
  );
  const nocustomState = defaultState;
  const nocustomChapterRule = selectRule(slideScopedRules, nocustomState);
  t.is(nocustomChapterRule, null, "Don't support 'variable' scoped target with custom field");
});
