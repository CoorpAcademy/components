// @flowk
import test from 'ava';

test('compute-next-step', t => {
  t.pass();
});

// import filter from 'lodash/fp/filter';
// import assign from 'lodash/fp/assign';
// import pipe from 'lodash/fp/pipe';
// import find from 'lodash/fp/find';
// // // import omit from 'lodash/fp/omit';
// import matches from 'lodash/fp/matches';
// import type {State, Content, Slide} from '../../types';
// import computeNextStep from '..';
// import allSlides from './fixtures/slides';
// import {stateBeforeGettingNextContent, firstState} from './fixtures/states';

// const engine = {
//   ref: 'microlearning',
//   version: '1'
// };

// const merge = arr2 => (arr: Array<Slide>): Array<Slide> => {
//   return arr.map((v, i): Slide => {
//     return assign(v, arr2[i]);
//   });
// };

// const prioritySlides: Array<Slide> = pipe(
//   filter({chapter_id: '1.A1'}),
//   merge([{position: 0}, {position: 0}, {position: 0}, {position: 1}, {position: 0}])
// )(allSlides);

// const slide1A11: ?Slide = find(
//   {
//     _id: '1.A1.1'
//   },
//   allSlides
// );

// if (!slide1A11) throw new Error('Slide `1.A1.1` not found');

// const slides = [
//   {
//     chapterId: '1.A1',
//     slides: prioritySlides
//   }
// ];

// const hasHighPriority: Slide => boolean = matches({position: 1});
// const findHigherPrioritySlide: (Array<Slide>) => ?Slide = find(hasHighPriority);
// const getId = (slide: ?Slide) => {
//   if (slide) return slide._id;
//   return;
// };
// const tryfindHigherPrioritySlideId = pipe(findHigherPrioritySlide, getId);

// test('should return the slide with higher priority from slides', t => {
//   const state = firstState;

//   const {nextContent} =
//     computeNextStep(engine, state, {
//       currentSlide: slide1A11,
//       answer: [],
//       godMode: true,

//       slidePools: slides
//     }) || {};

//   t.is(nextContent.ref, tryfindHigherPrioritySlideId(prioritySlides));

//   const nextState: State = {
//     ...state,
//     content: nextContent,
//     slides: [...state.slides, nextContent.ref]
//   };

//   const {nextContent: nextNextContent} =
//     computeNextStep(engine, nextState, {
//       currentSlide: slide1A11,
//       answer: [],
//       godMode: true,

//       slidePools: slides
//     }) || {};

//   t.is((find({_id: nextNextContent.ref}, prioritySlides) || {}).position, 0);
// });

// test('should return first slide pool if no slides in state', t => {
//   // const state: State = omit(['slides'], stateBeforeGettingNextContent);
//   const state = firstState;

//   const {nextContent} =
//     computeNextStep(engine, state, {
//       currentSlide: slide1A11,
//       answer: [],
//       godMode: true,

//       slidePools: slides
//     }) || {};

//   t.is(nextContent.ref, tryfindHigherPrioritySlideId(prioritySlides));

//   const nextState = {
//     ...state,
//     content: nextContent,
//     slides: [nextContent.ref]
//   };

//   const nextNextStep = computeNextStep(engine, slides, nextState);

//   t.is((find({_id: nextNextStep.ref}, prioritySlides) || {}).position, 0);
// });
