// @flow
import test from 'ava';
import type {Slide, SlidePool} from '../../types';
import createInitialAction from '../create-initial-action';
import allSlides from '../../compute-next-step/test/fixtures/slides';

const slidesByChapter = (slides: Array<Slide>): Array<SlidePool> => [
  {
    chapterId: '1.A1',
    slides: slides.filter(slide => slide.chapter_id === '1.A1')
  },
  {
    chapterId: '2.A1',
    slides: slides.filter(slide => slide.chapter_id === '2.A1')
  }
];

test('should check params  on createInitialAction', t => {
  // $FlowFixMe
  t.throws(createInitialAction, 'param AvailableContent is mandatory to create an initial Action');
});

test('should check adaptive params on createInitialAction', t => {
  t.throws(
    () =>
      // $FlowFixMe
      createInitialAction({
        chapterRulePool: []
      }),
    'No rule could be selected within this ChapterRulePool: could not create an adaptive initial Action'
  );
});

test('should check params content to create an initial action', t => {
  t.throws(
    () =>
      // $FlowFixMe
      createInitialAction({}),
    'provide either a ChapterRulePool or a SlidePools to create an initial Action'
  );
});

test('should check whether an initial slide is found to create an initial action', t => {
  t.throws(
    () =>
      // $FlowFixMe
      createInitialAction({
        slidePools: []
      }),
    'No initial slide found within this SlidePools: could not create an initial Action'
  );
});

test('should create an initial action from a slidePools', t => {
  const slidePools = slidesByChapter(allSlides);
  const action = createInitialAction({
    slidePools
  });

  t.is(action.type, 'move');
  t.is(action.payload.nextContent.type, 'slide');
  t.regex(action.payload.nextContent.ref, /^1\.A1\.[1-9]+$/);
});

test('should create an adaptive initial Action', t => {
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
  const randomRule = {
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
  };

  const chapterRulePool = [
    {
      ref: 'chapter1',
      rules: [initialRule, randomRule]
    }
  ];

  const action = createInitialAction({
    chapterRulePool
  });

  t.deepEqual(action, {
    type: 'move',
    payload: {
      instructions: [
        {
          field: 'foo',
          type: 'set',
          value: 0
        }
      ],
      nextContent: {type: 'slide', ref: '1.A1.1'}
    }
  });
});
