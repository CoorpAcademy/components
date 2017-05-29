import test from 'ava';
import {ANSWER_EDIT, ANSWER_RESET} from '../../../actions/ui/answers'; // eslint-disable-line import/no-duplicates
import {editAnswer, resetAnswer} from '../answers'; // eslint-disable-line import/no-duplicates

test('should check questionType or return same state', t => {
  const state = ['foo'];
  const action = editAnswer(state, 'bar', '0', {});

  t.is(action.type, undefined);
  t.is(action.meta.progressionId, '0');
  t.deepEqual(action.payload.answer, ['foo']);
});

test('should add a qcm choice', t => {
  const state = ['foo'];
  const action = editAnswer(state, 'qcm', '0', {label: 'bar'});

  t.is(action.type, ANSWER_EDIT.qcm);
  t.is(action.meta.progressionId, '0');
  t.deepEqual(action.payload.answer, ['foo', 'bar']);
});

test('should remove a qcm choice', t => {
  const state = ['foo'];
  const action = editAnswer(state, 'qcm', '0', {label: 'foo'});

  t.is(action.type, ANSWER_EDIT.qcm);
  t.is(action.meta.progressionId, '0');
  t.deepEqual(action.payload.answer, []);
});

test('should check qcm has answer.label or return same state', t => {
  const state = ['foo'];
  const action = editAnswer(state, 'qcm', '0', {});

  t.is(action.type, ANSWER_EDIT.qcm);
  t.is(action.meta.progressionId, '0');
  t.deepEqual(action.payload.answer, ['foo']);
});

test('should edit a template answer', t => {
  const state = ['foo'];
  const action = editAnswer(state, 'template', '0', 'bar');

  t.is(action.type, ANSWER_EDIT.template);
  t.is(action.meta.progressionId, '0');
  t.deepEqual(action.payload.answer, ['bar']);
});

test('should reset an answer', t => {
  const action = resetAnswer('0');
  t.is(action.type, ANSWER_RESET);
  t.is(action.meta.progressionId, '0');
  t.deepEqual(action.payload, []);
});
