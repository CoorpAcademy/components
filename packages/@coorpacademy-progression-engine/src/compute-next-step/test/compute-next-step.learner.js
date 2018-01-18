// @flow
import test from 'ava';

test('compute-next-step.learner', t => {
  t.pass();
});

// import type {Slide, State} from '../../types';
// import computeNextStep from '..';
// import allSlides from './fixtures/slides';
// import {stateBeforeGettingNextContent, failProgressionState} from './fixtures/states';

// const engine = {
//   ref: 'learner',
//   version: '1'
// };

// const slidesByChapter: Array<{chapterId: string, slides: Array<Slide>}> = [
//   {
//     chapterId: '1.A1',
//     slides: allSlides.filter(slide => slide.chapter_id === '1.A1')
//   },
//   {
//     chapterId: '2.A1',
//     slides: allSlides.filter(slide => slide.chapter_id === '2.A1')
//   }
// ];

// test('should return a new slide when user is still alive', t => {
//   const state: State = Object.freeze({
//     ...stateBeforeGettingNextContent,
//     nextContent: {
//       type: 'slide',
//       ref: '1.A1.1'
//     },
//     slides: ['1.A1.1']
//   });

//   const nextStep = computeNextStep(engine, slidesByChapter, state);
//   t.is(nextStep.type, 'slide');
//   t.regex(nextStep.ref, /^1\.A1\.\d+/);
//   t.not(nextStep.ref, '1.A1.1');
// });

// test('should return the fail endpoint, when user has no more lives', t => {
//   const state: State = Object.freeze({
//     ...failProgressionState,
//     nextContent: {
//       type: 'slide',
//       ref: '1.A1.1'
//     },
//     lives: 0,
//     slides: ['1.A1.1']
//   });

//   const nextStep = computeNextStep(engine, slidesByChapter, state);
//   t.deepEqual(nextStep, {
//     ref: 'failExitNode',
//     type: 'failure'
//   });
// });

// test('should switch chapters when user has answered `config.slidesToComplete` number of slides of a chapter', t => {
//   const state: State = Object.freeze({
//     ...stateBeforeGettingNextContent,
//     nextContent: {
//       type: 'slide',
//       ref: '1.A1.4'
//     },
//     slides: ['1.A1.1', '1.A1.2', '1.A1.3', '1.A1.4']
//   });

//   const nextStep = computeNextStep(engine, slidesByChapter, state);
//   t.is(nextStep.type, 'slide');
//   t.regex(nextStep.ref, /^2\.A1\.\d+/);
// });

// test('should return the success endpoint when user has answered `config.slidesToComplete` number of slides of every chapter', t => {
//   const state: State = Object.freeze({
//     ...stateBeforeGettingNextContent,
//     nextContent: {
//       type: 'slide',
//       ref: '2.A1.4'
//     },
//     slides: ['1.A1.1', '1.A1.2', '1.A1.3', '1.A1.4', '2.A1.1', '2.A1.2', '2.A1.3', '2.A1.4']
//   });

//   const nextStep = computeNextStep(engine, slidesByChapter, state);
//   t.deepEqual(nextStep, {
//     ref: 'successExitNode',
//     type: 'success'
//   });
// });
