import test from 'ava';
import {ANSWER_EDIT, editAnswer} from '../answers';

const macro = (t, state, inputType, input, expected) => {
  const action = editAnswer(state, inputType, '0', input);

  t.is(action.type, ANSWER_EDIT[inputType]);
  t.is(action.meta.progressionId, '0');
  t.deepEqual(action.payload, expected);
};

test('should check questionType or return same state', macro, ['foo'], 'bar', {}, ['foo']);
test('should add a qcm choice', macro, ['foo'], 'qcm', {label: 'bar'}, ['foo', 'bar']);
test('should remove a qcm choice', macro, ['foo'], 'qcm', {label: 'foo'}, []);
test('should check qcm has answer.label or return same state', macro, ['foo'], 'qcm', {}, ['foo']);
test('should remove a qcmGraphic choice', macro, ['foo'], 'qcmGraphic', {label: 'foo'}, []);
test('should add a qcmGraphic choice', macro, ['foo'], 'qcmGraphic', {label: 'bar'}, [
  'foo',
  'bar'
]);
test(
  'should check qcmGraphic has answer.label or return same state',
  macro,
  ['foo'],
  'qcmGraphic',
  {},
  ['foo']
);
test('should edit a template answer', macro, ['foo'], 'template', 'bar', ['bar']);
test('should edit a basic answer', macro, ['foo'], 'basic', 'bar', ['bar']);
test('should initiate state if undefined', macro, undefined, 'qcm', {label: 'bar'}, ['bar']);
