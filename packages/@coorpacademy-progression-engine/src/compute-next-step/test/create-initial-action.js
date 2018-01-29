// @flow
import test from 'ava';
import {computeInitialStep} from '..';
import type {Engine, EngineOptions, Slide, SlidePool} from '../../types';
import allSlides from './fixtures/slides';

const engine: Engine = {ref: 'learner', version: '1'};
const engineOptions: EngineOptions = {};

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

test('should check adaptive params on computeInitialStep', t => {
  t.throws(
    () => computeInitialStep(engine, engineOptions, {chapterRulePool: []}),
    'Available content should have at least some slides or chapter rules'
  );
});

test('should check params content to create an initial action', t => {
  t.throws(
    () => computeInitialStep(engine, engineOptions, {}),
    'Available content should have at least some slides or chapter rules'
  );
});

test('should check whether an initial slide is found to create an initial action', t => {
  t.throws(
    () => computeInitialStep(engine, engineOptions, {slidePools: []}),
    'Available content should have at least some slides or chapter rules'
  );
});

test('should create an initial action from a slidePools', t => {
  const slidePools = slidesByChapter(allSlides);
  const action = computeInitialStep(engine, engineOptions, {slidePools});

  t.is(action.type, 'move');
  t.is(action.payload.nextContent.type, 'slide');
  t.is(action.payload.instructions, null);
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

  const action = computeInitialStep(engine, engineOptions, {chapterRulePool});

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
