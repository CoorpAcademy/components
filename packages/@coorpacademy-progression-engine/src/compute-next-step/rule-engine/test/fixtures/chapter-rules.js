// @flow
import type {ChapterRule} from '../../select-rule';

const rules: Array<ChapterRule> = [
  {
    ref: 'start point 1',
    source: {
      type: 'slide',
      ref: ''
    },
    destination: {
      type: 'slide',
      ref: '1.A1.1'
    },
    priority: 10,
    instructions: [],
    conditions: []
  },

  {
    ref: '1.A1.1 right answer',
    source: {
      type: 'slide',
      ref: '1.A1.1'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.2'
    },
    priority: 10,
    instructions: [
      {
        field: 'stars',
        type: 'add',
        value: 4
      }
    ],
    conditions: [
      {
        target: {
          scope: 'state',
          field: 'lives'
        },
        operator: 'EQUALS',
        values: [3]
      }
    ]
  },
  {
    ref: '1.A1.1 default',
    source: {
      type: 'slide',
      ref: '1.A1.1'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.3'
    },
    priority: 11,
    instructions: [
      {
        field: 'lives',
        type: 'add',
        value: -1
      }
    ],
    conditions: []
  },

  {
    ref: '1.A1.2 right answer',
    source: {
      type: 'slide',
      ref: '1.A1.2'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.4'
    },
    priority: 10,
    instructions: [
      {
        field: 'stars',
        type: 'add',
        value: 4
      }
    ],
    conditions: [
      {
        target: {
          scope: 'state',
          field: 'lives'
        },
        operator: 'EQUALS',
        values: [3]
      },
      {
        target: {
          scope: 'variables',
          field: 'blabla'
        },
        operator: 'LT',
        values: [2]
      }
    ]
  },
  {
    ref: '1.A1.2 default',
    source: {
      type: 'slide',
      ref: '1.A1.2'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.5'
    },
    priority: 11,
    instructions: [
      {
        field: 'lives',
        type: 'add',
        value: -1
      }
    ],
    conditions: []
  },

  {
    ref: 'non-conditional-rule correct',
    source: {
      type: 'slide',
      ref: 'slideWithAnswers'
    },
    destination: {
      type: 'chapter',
      ref: '1.A3'
    },
    priority: 10,
    instructions: [],
    conditions: [
      {
        target: {
          scope: 'currentSlide',
          field: 'isCorrect'
        },
        operator: 'EQUALS',
        values: [true]
      }
    ]
  },

  {
    ref: 'non-conditional-rule default',
    source: {
      type: 'slide',
      ref: 'slideWithAnswers'
    },
    destination: {
      type: 'chapter',
      ref: '1.A4'
    },
    priority: 11,
    instructions: [],
    conditions: []
  },

  {
    ref: 'switch chapter',
    source: {
      type: 'slide',
      ref: 'lastChapterSlide'
    },
    destination: {
      type: 'chapter',
      ref: '1.A2'
    },
    priority: 10,
    instructions: [],
    conditions: []
  },

  {
    ref: 'complete module',
    source: {
      type: 'slide',
      ref: 'lastModuleSlide'
    },
    destination: {
      type: 'exitNode',
      ref: 'exitNode-success'
    },
    priority: 11,
    instructions: [],
    conditions: []
  },

  {
    ref: 'fail module',
    source: {
      type: 'slide',
      ref: 'lastModuleSlide_FAIL'
    },
    destination: {
      type: 'exitNode',
      ref: 'exitNode-fail'
    },
    priority: 11,
    instructions: [],
    conditions: []
  }
];

export default rules;
