import test from 'ava';
import {ANSWER_EDIT, editAnswer} from '../answers';

const macro = (t, state, inputType, input, expected) => {
  const action = editAnswer(state, inputType, '0', input);

  t.not(action.type, undefined);
  t.is(action.type, ANSWER_EDIT[inputType]);
  t.is(action.meta.progressionId, '0');
  t.deepEqual(action.payload, expected);
};

test('should throw an error if questionType is unknown', t => {
  return t.throws(
    () => editAnswer(['some answer'], 'bar', '0', ['some new answer']),
    'Unknown question type "bar"'
  );
});

test('should return initial state if state is undefined', macro, undefined, 'qcm', {label: 'bar'}, [
  'bar'
]);

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
test('should add a qcmDrag choice', macro, ['foo'], 'qcmDrag', {label: 'bar'}, ['foo', 'bar']);
test('should check qcmDrag has answer.label or return same state', macro, ['foo'], 'qcmDrag', {}, [
  'foo'
]);
test('should edit a template answer', macro, ['foo'], 'template', ['bar', 'foo'], ['bar', 'foo']);
test('should edit a basic answer', macro, ['foo'], 'basic', 'bar', ['bar']);
