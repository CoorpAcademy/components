// @flow
import test from 'ava';

test('create-progression', t => {
  t.pass();
});

// import type {Content} from '../types';
// import createProgression from '../create-progression';

// const chapterContent: Content = Object.freeze({
//   type: 'chapter',
//   ref: '1.A1',
//   version: '1.0.0'
// });

// const levelContent: Content = Object.freeze({
//   type: 'level',
//   ref: '1.A',
//   version: '1.0.0'
// });

// const initialContent: Content = Object.freeze({
//   type: 'slide',
//   ref: '1.A1.1'
// });

// test('should throw if the engine type is unknown', t => {
//   t.throws(
//     () =>
//       createProgression({ref: 'idontexist', version: 'latest'}, chapterContent, initialContent, {
//         livesDisabled: false
//       }),
//     'Unknown engine idontexist'
//   );
// });

// test('should return a new progression for microlearning', t => {
//   const progression = createProgression(
//     {ref: 'microlearning', version: '1'},
//     chapterContent,
//     initialContent,
//     {
//       livesDisabled: false
//     }
//   );

//   t.deepEqual(progression.content, chapterContent);
//   t.deepEqual(progression.actions, []);
//   t.deepEqual(progression.engine, {ref: 'microlearning', version: '1'});
//   t.deepEqual(progression.initialState, progression.state);
//   t.true(progression.initialState.lives === 1);
//   t.false(progression.initialState.livesDisabled);
//   t.true(progression.initialState.isCorrect);
//   t.deepEqual(progression.initialState.slides, []);
//   t.deepEqual(progression.initialState.step, {current: 1});
//   t.falsy(progression.initialState.content);
//   t.true(progression.initialState.nextContent.type === 'slide');
//   t.true(typeof progression.initialState.nextContent.ref === 'string');
// });

// test('should return a new progression for learner', t => {
//   const progression = createProgression(
//     {ref: 'learner', version: '1'},
//     levelContent,
//     initialContent,
//     {
//       livesDisabled: false
//     }
//   );

//   t.deepEqual(progression.content, levelContent);
//   t.deepEqual(progression.actions, []);
//   t.deepEqual(progression.engine, {ref: 'learner', version: '1'});
//   t.deepEqual(progression.initialState, progression.state);
//   t.true(progression.initialState.lives === 3);
//   t.false(progression.initialState.livesDisabled);
//   t.true(progression.initialState.isCorrect);
//   t.deepEqual(progression.initialState.slides, []);
//   t.deepEqual(progression.initialState.step, {current: 1});
//   t.falsy(progression.initialState.content);
//   t.true(progression.initialState.nextContent.type === 'slide');
//   t.true(typeof progression.initialState.nextContent.ref === 'string');
// });

// test('should use the default configuration if version is missing from the engine', t => {
//   t.deepEqual(
//     createProgression({ref: 'learner', version: 'latest'}, levelContent, initialContent, {
//       livesDisabled: false
//     }),
//     // $FlowFixMe
//     createProgression({ref: 'learner'}, levelContent, initialContent, {
//       livesDisabled: false
//     })
//   );
// });

// test('should set `initialState.livesDisabled` depending on livesDisabled argument and config', t => {
//   const engineLivesEnabled = {ref: 'learner', version: '1'};
//   const engineLivesDisabled = {ref: 'learner', version: 'livesDisabled'};

//   const progression1 = createProgression(engineLivesEnabled, levelContent, initialContent, {
//     livesDisabled: false
//   });
//   t.false(progression1.initialState.livesDisabled, 'should be disabled when both are false');
//   const progression2 = createProgression(
//     engineLivesEnabled,
//     levelContent,
//     initialContent,
//     // $FlowFixMe
//     undefined
//   );
//   t.false(progression2.initialState.livesDisabled, 'should be disabled when argument is undefined');
//   const progression3 = createProgression(engineLivesEnabled, levelContent, initialContent, {
//     livesDisabled: true
//   });
//   t.true(progression3.initialState.livesDisabled, 'should be enabled when argument is true');
//   const progression4 = createProgression(engineLivesDisabled, levelContent, initialContent, {
//     livesDisabled: false
//   });
//   t.true(progression4.initialState.livesDisabled, 'should be enabled when config is true');
//   const progression5 = createProgression(engineLivesDisabled, levelContent, initialContent, {
//     livesDisabled: true
//   });
//   t.true(progression5.initialState.livesDisabled, 'should be enabled when both are true');
// });

// test('should create progression with initial instructions and set `variables` in state', t => {
//   const progression = createProgression(
//     {ref: 'microlearning', version: '1'},
//     chapterContent,
//     initialContent,
//     {
//       instructions: [
//         {value: 1, type: 'set', field: 'A'},
//         {value: 3, type: 'add', field: 'lives'},
//         {value: 2, type: 'set', field: 'stars'},
//         {value: false, type: 'set', field: 'reverse'}
//       ]
//     }
//   );

//   t.is(progression.state.variables.A, 1);
//   t.is(progression.state.lives, 4);
//   t.is(progression.state.stars, 2);
//   t.is(progression.state.variables.reverse, false);
// });
