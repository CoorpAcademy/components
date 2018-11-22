import test from 'ava';
import omit from 'lodash/fp/omit';
import isFunction from 'lodash/fp/isFunction';
import identity from 'lodash/fp/identity';
import {mockTranslate} from '@coorpacademy/translate';
import {createGetAnswerProps, createGetHelp} from '../answer';
import {ANSWER_EDIT} from '../@coorpacademy/player-store/es/actions/ui/answers';
import basic from './fixtures/slides/basic';
import qcm from './fixtures/slides/qcm';
import qcmDrag from './fixtures/slides/qcmDrag';
import qcmGraphic from './fixtures/slides/qcm-graphic';
import template from './fixtures/slides/template';
import slider from './fixtures/slides/slider';

const options = {translate: mockTranslate};
const store = {dispatch: identity};
const getAnswerProps = createGetAnswerProps(options, store);
const getHelp = createGetHelp(options, store);

test('should create initial qcm props', t => {
  const state = {};
  const props = getAnswerProps(state, qcm);
  t.is(props.type, 'qcm');
  t.true(props.answers.every(answer => answer.selected === false));
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
  t.is(props.answers.length, 4);
  t.is(props.answers[0].title, 'Case 1');
  t.true(props.answers[0].selected);
  t.is(props.answers[1].title, 'Case 2');
  t.false(props.answers[1].selected);
  t.is(props.answers[2].title, 'Case 3');
  t.true(props.answers[2].selected);
  t.is(props.answers[3].title, 'Case 4');
  t.false(props.answers[3].selected);
  t.true(isFunction(props.answers[0].onClick));
});

test('should create edited template props', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['foo', 'exclusive']}},
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
  t.is(props.answers[0].placeholder, '__Type here');
  t.is(props.answers[0].value, 'foo');
  t.true(isFunction(props.answers[0].onChange));
  t.is(props.answers[1].type, 'select');
  t.is(props.answers[1].name, 'sel31191');
  t.true(isFunction(props.answers[1].onChange));
  const selectOptions = props.answers[1].options;
  t.true(Array.isArray(selectOptions));
  t.is(selectOptions.length, 2);
  t.is(selectOptions[0].name, 'temporary');
  t.is(selectOptions[0].value, 'temporary');
  t.false(selectOptions[0].selected);
  t.true(selectOptions[0].validOption);
  t.is(selectOptions[1].name, 'exclusive');
  t.is(selectOptions[1].value, 'exclusive');
  t.true(selectOptions[1].selected);
  t.true(selectOptions[1].validOption);
});

test('should add an invalid `select an answer` choice for a select field in a template question if there are no answers for it', t => {
  const state = {
    ui: {
      answers: {},
      current: {progressionId: '1234'}
    }
  };

  const selectOptions = getAnswerProps(state, template).answers[1].options;

  t.is(selectOptions.length, 3);
  t.is(selectOptions[0].name, '__Select an answer');
  t.true(selectOptions[0].selected);
  t.false(selectOptions[0].validOption);
  t.is(selectOptions[1].name, 'temporary');
  t.is(selectOptions[1].value, 'temporary');
  t.false(selectOptions[1].selected);
  t.true(selectOptions[1].validOption);
  t.is(selectOptions[2].name, 'exclusive');
  t.is(selectOptions[2].value, 'exclusive');
  t.false(selectOptions[2].selected);
  t.true(selectOptions[2].validOption);
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

test('should create initial qcmGraphic props', t => {
  const state = {};
  const props = getAnswerProps(state, qcmGraphic);
  t.is(props.type, 'qcmGraphic');
  t.is(props.answers.length, 2);
  t.true(props.answers.every(answer => answer.selected === false));
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
  t.is(props.answers.length, 2);
  t.is(props.answers[0].title, 'Vrai');
  t.true(props.answers[0].selected);
  t.is(props.answers[1].title, 'Faux');
  t.false(props.answers[1].selected);
  t.true(isFunction(props.answers[0].onClick));
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

test('should create initial qcmDrag props', t => {
  const state = {};
  const props = getAnswerProps(state, qcmDrag);
  t.is(props.type, 'qcmDrag');
  t.is(props.answers.length, 3);
  t.is(props.answers[0].title, "L'ordinateur");
  t.false(props.answers[0].selected);
  t.true(isFunction(props.answers[0].onClick));
  t.is(props.answers[1].title, 'La tablette');
  t.false(props.answers[1].selected);
  t.true(isFunction(props.answers[1].onClick));
  t.is(props.answers[2].title, 'Le smartphone');
  t.false(props.answers[2].selected);
  t.true(isFunction(props.answers[2].onClick));
});

test('should create edited qcmDrag props', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['Le smartphone', "L'ordinateur"]}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, qcmDrag);
  t.is(props.type, 'qcmDrag');
  t.is(props.answers.length, 3);

  t.is(props.answers[0].title, "L'ordinateur");
  t.true(props.answers[0].selected);
  t.is(props.answers[0].order, 1);
  t.true(isFunction(props.answers[0].onClick));
  t.is(props.answers[1].title, 'La tablette');
  t.false(props.answers[1].selected);
  t.true(isFunction(props.answers[1].onClick));
  t.is(props.answers[2].title, 'Le smartphone');
  t.true(props.answers[2].selected);
  t.is(props.answers[2].order, 0);
  t.true(isFunction(props.answers[2].onClick));
});

test('should create initial slider props', t => {
  t.plan(8);
  const state = {};

  const dispatch = action => {
    t.deepEqual(action, {
      type: ANSWER_EDIT.slider,
      meta: {
        progressionId: undefined
      },
      payload: ['900']
    });
  };

  const props = createGetAnswerProps(options, {dispatch})(state, slider);

  t.is(props.type, 'slider');
  t.is(props.placeholder, 'Déplacez le curseur.');
  t.is(props.minLabel, '0 an(s)');
  t.is(props.maxLabel, '1000 an(s)');
  t.is(props.title, '500 an(s)');
  t.is(props.value, 0.5);
  t.true(isFunction(props.onChange));

  props.onChange(0.87);
});

test('should default slider step to 1', t => {
  t.plan(2);
  const state = {};

  const dispatch = action => {
    t.deepEqual(action, {
      type: ANSWER_EDIT.slider,
      meta: {
        progressionId: undefined
      },
      payload: ['870']
    });
  };

  const props = createGetAnswerProps(options, {dispatch})(
    state,
    omit('question.content.step', slider)
  );

  t.true(isFunction(props.onChange));

  props.onChange(0.87);
});

test('should create edited slider props', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['300']}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, slider);
  t.is(props.title, '300 an(s)');
  t.is(props.value, 0.3);
});

test('should create action: edit-answer-qcmDrag (answer selection)', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['Le smartphone', "L'ordinateur"]}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, qcmDrag);
  const action = props.answers[1].onClick();

  t.is(action.type, ANSWER_EDIT.qcmDrag);
  t.deepEqual(action.payload, ['Le smartphone', "L'ordinateur", 'La tablette']);
  t.is(action.meta.progressionId, '1234');
});

test('should create action: edit-answer-qcmDrag (answer removal)', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['Le smartphone', "L'ordinateur"]}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, qcmDrag);
  const action = props.answers[2].onClick();

  t.is(action.type, ANSWER_EDIT.qcmDrag);
  t.deepEqual(action.payload, ["L'ordinateur"]);
  t.is(action.meta.progressionId, '1234');
});

test('should create action: edit-answer-template', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['ABCDEFGH', 'exclusive']}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, template);
  const textAction = props.answers[0].onChange('bar');
  const selectAction = props.answers[1].onChange('bar');

  t.is(textAction.type, ANSWER_EDIT.template);
  t.deepEqual(textAction.payload, ['bar', 'exclusive']);
  t.is(textAction.meta.progressionId, '1234');

  t.is(selectAction.type, ANSWER_EDIT.template);
  t.deepEqual(selectAction.payload, ['ABCDEFGH', 'bar']);
  t.is(selectAction.meta.progressionId, '1234');
});

test('should create action: edit-answer-template (entering second field with no current answer existing)', t => {
  const state = {
    ui: {
      answers: {},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, template);
  const textAction = props.answers[0].onChange('bar');
  const selectAction = props.answers[1].onChange('bar');

  t.is(textAction.type, ANSWER_EDIT.template);
  t.deepEqual(textAction.payload, ['bar']);
  t.is(textAction.meta.progressionId, '1234');

  t.is(selectAction.type, ANSWER_EDIT.template);
  t.deepEqual(selectAction.payload, ['', 'bar']);
  t.is(selectAction.meta.progressionId, '1234');
});

test('should create action: edit-answer-slider', t => {
  const state = {
    ui: {
      answers: {'1234': {value: ['500']}},
      current: {progressionId: '1234'}
    }
  };

  const props = getAnswerProps(state, slider);
  const action = props.onChange(0.3);

  t.deepEqual(action, {
    type: ANSWER_EDIT.slider,
    payload: ['300'],
    meta: {
      progressionId: '1234'
    }
  });
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

test('should provide an help subtitle depending on question.type', t => {
  const help = getHelp(qcmDrag);
  t.is(help, 'Cliquez sur les réponses dans le bon ordre.');
  const help1 = getHelp(template);
  t.is(help1, 'Type your answers');
  const help2 = getHelp(qcm);
  t.is(help2, '__Select something below');
});
