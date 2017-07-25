import test from 'ava';
import isFunction from 'lodash/fp/isFunction';
import identity from 'lodash/fp/identity';
import reduce from 'lodash/fp/reduce';
import creategetAnswerProps from '../answer';
import {ANSWER_EDIT} from '../../../actions/ui/answers';
import basic from './fixtures/slides/basic';
import qcm from './fixtures/slides/qcm';
import qcmGraphic from './fixtures/slides/qcmGraphic';
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
      answers: {'1234': {value: ['foo', 'sli_Nk2vje~E~.choice_Ek~jJyPNUZ']}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, template);
  t.is(props.type, 'template');
  t.is(props.template, 'The answer is {{inp81438}} {{sel31191}}');
  t.true(Array.isArray(props.answers));
  t.is(props.answers.length, 2);
  t.is(props.answers[0].type, 'text');
  t.is(props.answers[0].name, 'inp81438');
  t.is(props.answers[0].placeholder, 'Type here');
  t.is(props.answers[0].value, 'foo');
  t.is(typeof props.answers[0].onChange, 'function');
  t.is(props.answers[1].type, 'select');
  t.is(props.answers[1].name, 'sel31191');
  const selectOptions = props.answers[1].options;
  t.true(Array.isArray(selectOptions));
  t.is(selectOptions.length, 2);
  t.is(selectOptions[0].name, 'temporary');
  t.is(selectOptions[0].value, 'sli_Nk2vje~E~.choice_VyloJkDEUb');
  t.false(selectOptions[0].selected);
  t.is(selectOptions[1].name, 'exclusive');
  t.is(selectOptions[1].value, 'sli_Nk2vje~E~.choice_Ek~jJyPNUZ');
  t.true(selectOptions[1].selected);
  t.is(typeof selectOptions[0].onChange, 'function');
  t.is(typeof selectOptions[1].onChange, 'function');
});

test('should select the first choice of a select field in a template question if there are no answers', t => {
  const state = {
    ui: {
      answers: {},
      current: {progressionId: '1234'}
    }
  };

  const selectOptions = getAnswerProps(state, template).answers[1].options;

  t.true(selectOptions[0].selected);
  t.false(selectOptions[1].selected);
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

test('should create action: edit-answer-qcmGraphic', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['Vrai']}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, qcmGraphic);
  const action = props.answers[1].onClick();

  t.is(action.type, ANSWER_EDIT.qcmGraphic);
  t.is(action.payload[1], 'Faux');
  t.is(action.meta.progressionId, '1234');
});

test('should create initial qcmGraphic props', t => {
  const state = {};
  const props = getAnswerProps(state, qcmGraphic);
  t.is(props.type, 'qcmGraphic');
  t.is(reduce((acc, answer) => acc && answer.selected, true)(props.answers), false);
});

test('should create edited qcmGraphic props', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['Vrai']}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, qcmGraphic);
  t.is(props.type, 'qcmGraphic');
  t.is(reduce((acc, answer) => acc && answer.selected, true)(props.answers), false);
  t.is(props.answers[0].title, 'Vrai');
  t.is(props.answers[0].selected, true);
  t.is(props.answers[1].title, 'Faux');
  t.is(props.answers[1].selected, false);
  t.is(isFunction(props.answers[0].onClick), true);
});

test.skip('should create action: edit-answer-template', t => {
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
