import test from 'ava';
import isFunction from 'lodash/fp/isFunction';
import identity from 'lodash/fp/identity';
import reduce from 'lodash/fp/reduce';
import creategetAnswerProps from '../answer';
import {ANSWER_EDIT} from '../../../actions/ui/answers';
import basic from './fixtures/slides/basic';
import qcm from './fixtures/slides/qcm';
import template from './fixtures/slides/template';

const options = {translate: identity};
const store = {dispatch: identity};
const getAnswerProps = creategetAnswerProps(options, store);

test('should create initial qcm props', t => {
  const state = {};
  const props = getAnswerProps(state, qcm);
  t.is(props.type, 'qcm');
  t.is(reduce((acc, answer) => acc && answer.selected, true)(props.answers), false);
});

test('should create edited qcm props', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['Case 1', 'Case 3']}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, qcm);
  t.is(props.type, 'qcm');
  t.is(reduce((acc, answer) => acc && answer.selected, true)(props.answers), false);
  t.is(props.answers[0].title, 'Case 1');
  t.is(props.answers[0].selected, true);
  t.is(props.answers[1].title, 'Case 2');
  t.is(props.answers[1].selected, false);
  t.is(props.answers[2].title, 'Case 3');
  t.is(props.answers[2].selected, true);
  t.is(isFunction(props.answers[0].onClick), true);
});

test('should create edited template props', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['foo']}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, template);
  t.is(props.type, 'freeText');
  t.is(props.value, 'foo');
  t.is(isFunction(props.onChange), true);
});

test('should create action: edit-answer-qcm', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['Case 1']}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, qcm);
  const action = props.answers[2].onClick();

  t.is(action.type, ANSWER_EDIT.qcm);
  t.is(action.payload[1], 'Case 3');
  t.is(action.meta.progressionId, '1234');
});

test('should create action: edit-answer-template', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['foo']}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, template);
  const action = props.onChange('foo');

  t.is(action.type, ANSWER_EDIT.template);
  t.is(action.payload[0], 'foo');
  t.is(action.meta.progressionId, '1234');
});

test('should create initial basic props', t => {
  const state = {};
  const props = getAnswerProps(state, basic);
  t.is(props.type, 'freeText');
});

test('should create edited basic props', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['foo']}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, basic);
  t.is(props.type, 'freeText');
  t.is(props.value, 'foo');
  t.true(isFunction(props.onChange));
});
