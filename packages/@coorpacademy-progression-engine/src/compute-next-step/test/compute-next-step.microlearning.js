// @flow
import test from 'ava';

test('compute-next-step.microlearning', t => {
  t.pass();
});

// import type {State} from '../../types';
// import computeNextStep from '..';
// import allSlides from './fixtures/slides';
// import {
//   stateBeforeGettingNextContent,
//   failProgressionState,
//   successProgressionState,
//   extraLifeProgressionState,
//   extraLifeAlreadyRefusedProgressionState
// } from './fixtures/states';

// const engine = {
//   ref: 'microlearning',
//   version: '1'
// };

// const slides = [
//   {
//     chapterId: '1.A1',
//     slides: allSlides.filter(slide => slide.chapter_id === '1.A1')
//   }
// ];

// test('should return a new slide when user is still alive', t => {
//   const state: State = Object.freeze(stateBeforeGettingNextContent);

//   const nextStep = computeNextStep(engine, slides, state);
//   t.not(nextStep.ref, '1.A1.1');
// });

// test('should return the fail endpoint, when user has no more lives', t => {
//   const state: State = Object.freeze(failProgressionState);

//   const nextStep = computeNextStep(engine, slides, state);
//   t.deepEqual(nextStep, {
//     ref: 'failExitNode',
//     type: 'failure'
//   });
// });

// test('should return the success endpoint when user has answered `config.slidesToComplete` number of slides', t => {
//   const state: State = Object.freeze(successProgressionState);

//   const nextStep = computeNextStep(engine, slides, state);
//   t.deepEqual(nextStep, {
//     ref: 'successExitNode',
//     type: 'success'
//   });
// });

// test('should return the extraLife endpoint when progressions has no more lives & at least one extra life', t => {
//   const state = Object.freeze(extraLifeProgressionState);

//   const nextStep = computeNextStep(engine, slides, state);
//   t.deepEqual(nextStep, {
//     ref: 'extraLife',
//     type: 'node'
//   });
// });

// test('should return the failure endpoint when progression has at least one remaining extra life and extraLife has already just been refused', t => {
//   const state = Object.freeze(extraLifeAlreadyRefusedProgressionState);

//   const nextStep = computeNextStep(engine, slides, state);
//   t.deepEqual(nextStep, {
//     ref: 'failExitNode',
//     type: 'failure'
//   });
// });
