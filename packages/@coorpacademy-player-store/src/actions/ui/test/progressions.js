import test from 'ava';
import macro from '../../test/helpers/macro';
import {
  selectProgression,
  openAssistance,
  UI_SELECT_PROGRESSION,
  OPEN_ASSISTANCE_REQUEST,
  OPEN_ASSISTANCE_SUCCESS
} from '../progressions';
import {ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS, ANSWER_FETCH_FAILURE} from '../../api/answers';
import {
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_SUCCESS,
  PROGRESSION_FETCH_FAILURE,
  PROGRESSION_FETCH_BESTOF_REQUEST,
  PROGRESSION_FETCH_BESTOF_SUCCESS,
  ENGINE_CONFIG_FETCH_REQUEST,
  ENGINE_CONFIG_FETCH_SUCCESS
} from '../../api/progressions';
import {
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS
} from '../../api/rank';
import {EXIT_NODE_FETCH_REQUEST, EXIT_NODE_FETCH_SUCCESS} from '../../api/exit-nodes';
import {
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_INFO_FETCH_REQUEST,
  CONTENT_INFO_FETCH_SUCCESS
} from '../../api/contents';
import {RECO_FETCH_REQUEST, RECO_FETCH_SUCCESS} from '../../api/recommendations';
import {NEXT_CONTENT_FETCH_REQUEST, NEXT_CONTENT_FETCH_SUCCESS} from '../../api/next-content';
import {UI_SELECT_ROUTE} from '../route';

const slide = {_id: 'bar', chapter_id: 'baz', foo: 1};
const slideWithContext = {
  _id: 'bar',
  chapter_id: 'baz',
  context: {title: 'some-title', description: 'some-description', foo: 2}
};

const ContentService = (t, withContext) => ({
  find: (type, ref) => {
    switch (type) {
      case 'chapter':
        t.is(ref, 'baz');
        return {_id: 'baz', foo: 3};

      case 'slide':
        t.is(ref, 'bar');
        return withContext ? slideWithContext : slide;

      default:
        t.fail();
    }
  },
  getInfo: (contentRef, engineRef, version) => {
    t.is(contentRef, 'baz');
    t.is(engineRef, 'qux');
    t.is(version, 'quux');
    return 'info';
  }
});

test(
  'should dispatch openAssistance action',
  macro,
  {},
  t => ({
    Progressions: {
      openAssistance: progression => {
        t.deepEqual(progression, {foo: 'foo'});
      }
    }
  }),
  openAssistance({foo: 'foo'}),
  [
    {
      type: OPEN_ASSISTANCE_REQUEST,
      meta: {
        progression: {foo: 'foo'}
      }
    },
    {
      type: OPEN_ASSISTANCE_SUCCESS,
      meta: {
        progression: {foo: 'foo'}
      },
      payload: undefined
    }
  ],
  1
);

test(
  'should select progression and fail to fetch progression if progression could not be found',
  macro,
  {},
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        throw new Error('some error');
      }
    }
  }),
  selectProgression('foo'),
  [
    {
      type: UI_SELECT_PROGRESSION,
      payload: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_FAILURE,
      meta: {id: 'foo'},
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);

test(
  'should select progression and fetch next slide',
  macro,
  {},
  t => ({
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        return {
          _id: 'foo',
          state: {
            nextContent: {type: 'slide', ref: 'bar'}
          },
          content: {type: 'chapter', ref: 'baz'},
          engine: {ref: 'qux', version: 'quux'}
        };
      },
      findBestOf: (type, contentType, ref, id) => {
        t.is(contentType, 'chapter');
        t.is(ref, 'baz');
        return 16;
      },
      getEngineConfig: () => {
        t.pass();
        return 42;
      }
    },
    LeaderBoard: {
      getRank: () => {
        t.pass();
        return 1;
      }
    },
    Content: ContentService(t, false)
  }),
  selectProgression('foo'),
  [
    {
      type: UI_SELECT_PROGRESSION,
      payload: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: {
        _id: 'foo',
        state: {
          nextContent: {type: 'slide', ref: 'bar'}
        },
        content: {type: 'chapter', ref: 'baz'},
        engine: {ref: 'qux', version: 'quux'}
      }
    },
    {
      type: RANK_FETCH_START_REQUEST
    },
    {
      type: RANK_FETCH_START_SUCCESS,
      payload: 1
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: {_id: 'baz', foo: 3}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: 16
    },
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'qux', version: 'quux'}}
    },
    {
      type: ENGINE_CONFIG_FETCH_SUCCESS,
      meta: {engine: {ref: 'qux', version: 'quux'}},
      payload: 42
    },
    {
      type: CONTENT_INFO_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: CONTENT_INFO_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: 'info'
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'slide', ref: 'bar'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'slide', ref: 'bar'},
      payload: slide
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: UI_SELECT_ROUTE,
      payload: 'answer',
      meta: {progressionId: 'foo'}
    }
  ],
  10
);

test(
  'should select progression and fetch next slide, and show context if available',
  macro,
  {},
  t => ({
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        return {
          _id: 'foo',
          state: {
            nextContent: {type: 'slide', ref: 'bar'}
          },
          content: {type: 'chapter', ref: 'baz'},
          engine: {ref: 'qux', version: 'quux'}
        };
      },
      findBestOf: (type, contentType, ref, id) => {
        t.is(contentType, 'chapter');
        t.is(ref, 'baz');
        return 16;
      },
      getEngineConfig: () => {
        t.pass();
        return 42;
      }
    },
    LeaderBoard: {
      getRank: () => {
        t.pass();
        return 1;
      }
    },
    Content: ContentService(t, true)
  }),
  selectProgression('foo'),
  [
    {
      type: UI_SELECT_PROGRESSION,
      payload: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: {
        _id: 'foo',
        state: {
          nextContent: {type: 'slide', ref: 'bar'}
        },
        content: {type: 'chapter', ref: 'baz'},
        engine: {ref: 'qux', version: 'quux'}
      }
    },
    {
      type: RANK_FETCH_START_REQUEST
    },
    {
      type: RANK_FETCH_START_SUCCESS,
      payload: 1
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: {
        _id: 'baz',
        foo: 3
      }
    },
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: 16
    },
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'qux', version: 'quux'}}
    },
    {
      type: ENGINE_CONFIG_FETCH_SUCCESS,
      meta: {engine: {ref: 'qux', version: 'quux'}},
      payload: 42
    },
    {
      type: CONTENT_INFO_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: CONTENT_INFO_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: 'info'
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'slide', ref: 'bar'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'slide', ref: 'bar'},
      payload: slideWithContext
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: UI_SELECT_ROUTE,
      meta: {progressionId: 'foo'},
      payload: 'context'
    }
  ],
  10
);

test(
  'should select progression and fetch next ExitNode',
  macro,
  {},
  t => ({
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        return {
          _id: 'foo',
          state: {
            nextContent: {type: 'success', ref: 'bar'}
          },
          content: {type: 'chapter', ref: 'baz'},
          engine: {ref: 'qux', version: 'quux'}
        };
      },
      findBestOf: (type, contentType, ref, id) => {
        t.is(contentType, 'chapter');
        t.is(ref, 'baz');
        return 16;
      },
      getEngineConfig: () => {
        t.pass();
        return 42;
      }
    },
    ExitNodes: {
      findById: id => {
        t.is(id, 'bar');
        return 'bar';
      }
    },
    LeaderBoard: {
      getRank: () => {
        t.pass();
        return 1;
      }
    },
    Content: ContentService(t, false),
    Recommendations: {
      find: () => 'plop',
      getNext: () => 'plip'
    }
  }),
  selectProgression('foo'),
  [
    {
      type: UI_SELECT_PROGRESSION,
      payload: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: {
        _id: 'foo',
        state: {
          nextContent: {type: 'success', ref: 'bar'}
        },
        content: {type: 'chapter', ref: 'baz'},
        engine: {ref: 'qux', version: 'quux'}
      }
    },
    {
      type: RANK_FETCH_START_REQUEST
    },
    {
      type: RANK_FETCH_START_SUCCESS,
      payload: 1
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: {_id: 'baz', foo: 3}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: 16
    },
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'qux', version: 'quux'}}
    },
    {
      type: ENGINE_CONFIG_FETCH_SUCCESS,
      meta: {engine: {ref: 'qux', version: 'quux'}},
      payload: 42
    },
    {
      type: CONTENT_INFO_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: CONTENT_INFO_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: 'info'
    },
    {
      type: RECO_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: RANK_FETCH_END_REQUEST
    },
    {
      type: NEXT_CONTENT_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: EXIT_NODE_FETCH_REQUEST,
      meta: {id: 'bar'}
    },
    {
      type: RECO_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: 'plop'
    },
    {
      type: RANK_FETCH_END_SUCCESS,
      payload: 1
    },
    {
      type: NEXT_CONTENT_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: 'plip'
    },
    {
      type: EXIT_NODE_FETCH_SUCCESS,
      meta: {id: 'bar'},
      payload: 'bar'
    }
  ],
  11
);

const recommendationFixture = {
  recommendations: {
    hits: [
      {
        type: 'course',
        ref: '12',
        modules: [
          {
            ref: '12B',
            level: 'base',
            creditsToAccess: 1,
            isConditional: false
          },
          {
            ref: '12A',
            level: 'advanced',
            creditsToAccess: 1,
            isConditional: false
          },
          {
            ref: '12C',
            level: 'coach',
            creditsToAccess: 0,
            isConditional: false
          }
        ]
      }
    ]
  },
  nextLevel: {
    level: 'advanced',
    ref: '1A',
    chapterIds: ['1A1', '1A2', '1A3']
  }
};

test(
  'should select learner progression and fetch next ExitNode and Next Level',
  macro,
  {},
  t => ({
    Progressions: {
      findById: id => {
        t.is(id, 'foo');
        return {
          _id: 'foo',
          state: {
            nextContent: {type: 'success', ref: 'bar'}
          },
          content: {type: 'level', ref: '1B'},
          engine: {ref: 'learner', version: '1'}
        };
      },
      findBestOf: (type, contentType, ref, id) => {
        t.is(contentType, 'level');
        t.is(type, 'learner');
        t.is(ref, '1B');
        t.is(id, 'foo');
        return 32;
      },
      getEngineConfig: () => {
        t.pass();
        return 42;
      }
    },
    ExitNodes: {
      findById: id => {
        t.is(id, 'bar');
        return 'bar';
      }
    },
    LeaderBoard: {
      getRank: () => {
        t.pass();
        return 1;
      }
    },
    Content: {
      find: (type, ref) => {
        if (ref === '1B') {
          return {ref: '1B', level: 'base'};
        }
      },
      getInfo: (contentRef, engineRef, version) => {
        t.is(contentRef, '1B');
        t.is(engineRef, 'learner');
        t.is(version, '1');
        return 'info';
      }
    },
    Recommendations: {
      find: (type, ref) => {
        t.is(type, 'level');
        t.is(ref, '1B');
        return recommendationFixture.recommendations;
      },
      getNext: (type, ref) => {
        t.is(type, 'level');
        t.is(ref, '1B');
        return recommendationFixture.nextLevel;
      }
    }
  }),
  selectProgression('foo'),
  [
    {
      type: UI_SELECT_PROGRESSION,
      payload: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: {
        _id: 'foo',
        state: {
          nextContent: {type: 'success', ref: 'bar'}
        },
        content: {type: 'level', ref: '1B'},
        engine: {ref: 'learner', version: '1'}
      }
    },
    {
      type: RANK_FETCH_START_REQUEST
    },
    {
      type: RANK_FETCH_START_SUCCESS,
      payload: 1
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'level', ref: '1B'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'level', ref: '1B'},
      payload: {level: 'base', ref: '1B'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {type: 'level', ref: '1B'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: {type: 'level', ref: '1B'},
      payload: 32
    },
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'learner', version: '1'}}
    },
    {
      type: ENGINE_CONFIG_FETCH_SUCCESS,
      meta: {engine: {ref: 'learner', version: '1'}},
      payload: 42
    },
    {
      type: CONTENT_INFO_FETCH_REQUEST,
      meta: {type: 'level', ref: '1B'}
    },
    {
      type: CONTENT_INFO_FETCH_SUCCESS,
      meta: {type: 'level', ref: '1B'},
      payload: 'info'
    },
    {
      type: RECO_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: RANK_FETCH_END_REQUEST
    },
    {
      type: NEXT_CONTENT_FETCH_REQUEST,
      meta: {id: 'foo'}
    },
    {
      type: EXIT_NODE_FETCH_REQUEST,
      meta: {id: 'bar'}
    },
    {
      type: RECO_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: recommendationFixture.recommendations
    },
    {
      type: RANK_FETCH_END_SUCCESS,
      payload: 1
    },
    {
      type: NEXT_CONTENT_FETCH_SUCCESS,
      meta: {id: 'foo'},
      payload: recommendationFixture.nextLevel
    },
    {
      type: EXIT_NODE_FETCH_SUCCESS,
      meta: {id: 'bar'},
      payload: 'bar'
    }
  ],
  16
);

test(
  'should select progression on node extralife, fetching previous content',
  macro,
  {},
  t => ({
    Answers: {
      findById: (progressionId, slideId, givenAnswers) => {
        t.is(slideId, slide._id);
        t.is(progressionId, 'xtralife');
        t.deepEqual(givenAnswers, []);
        return ['a', 'n', 's', 'w', 'e', 'r', 's'];
      }
    },
    Progressions: {
      findById: id => {
        t.is(id, 'xtralife');
        return {
          _id: 'xtralife',
          state: {
            content: {type: 'slide', ref: 'bar'},
            nextContent: {type: 'node', ref: 'extraLife'}
          },
          content: {type: 'chapter', ref: 'baz'},
          engine: {ref: 'qux', version: 'quux'}
        };
      },
      findBestOf: (type, contentType, ref, id) => {
        t.is(contentType, 'chapter');
        t.is(ref, 'baz');
        return 16;
      },
      getEngineConfig: () => {
        t.pass();
        return 42;
      }
    },
    ExitNodes: {
      findById: id => {
        t.is(id, 'bar');
        return 'bar';
      }
    },
    LeaderBoard: {
      getRank: () => {
        t.pass();
        return 1;
      }
    },
    Content: ContentService(t, false),
    Recommendations: {
      find: () => 'plop',
      getNext: () => 'plip'
    }
  }),
  selectProgression('xtralife'),
  [
    {
      type: UI_SELECT_PROGRESSION,
      payload: {id: 'xtralife'}
    },
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'xtralife'}
    },
    {
      type: PROGRESSION_FETCH_SUCCESS,
      meta: {id: 'xtralife'},
      payload: {
        _id: 'xtralife',
        state: {
          content: {type: 'slide', ref: 'bar'},
          nextContent: {type: 'node', ref: 'extraLife'}
        },
        content: {type: 'chapter', ref: 'baz'},
        engine: {ref: 'qux', version: 'quux'}
      }
    },
    {
      type: RANK_FETCH_START_REQUEST
    },
    {
      type: RANK_FETCH_START_SUCCESS,
      payload: 1
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: {_id: 'baz', foo: 3}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: 16
    },
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'qux', version: 'quux'}}
    },
    {
      type: ENGINE_CONFIG_FETCH_SUCCESS,
      meta: {engine: {ref: 'qux', version: 'quux'}},
      payload: 42
    },
    {
      type: CONTENT_INFO_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'baz'}
    },
    {
      type: CONTENT_INFO_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'baz'},
      payload: 'info'
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'slide', ref: 'bar'}
    },
    {
      type: CONTENT_FETCH_SUCCESS,
      meta: {type: 'slide', ref: 'bar'},
      payload: slide
    },
    {
      type: ANSWER_FETCH_REQUEST,
      meta: {progressionId: 'xtralife', slideId: 'bar'}
    },
    {
      type: ANSWER_FETCH_SUCCESS,
      meta: {progressionId: 'xtralife', slideId: 'bar'},
      payload: ['a', 'n', 's', 'w', 'e', 'r', 's']
    }
  ],
  13
);
