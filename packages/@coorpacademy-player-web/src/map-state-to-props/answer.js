import pipe from 'lodash/fp/pipe';
import includes from 'lodash/fp/includes';
import head from 'lodash/fp/head';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import divide from 'lodash/fp/divide';
import multiply from 'lodash/fp/multiply';
import __ from 'lodash/fp/__';
import round from 'lodash/fp/round';
import size from 'lodash/fp/size';
import constant from 'lodash/fp/constant';
import times from 'lodash/fp/times';
import set from 'lodash/fp/set';
import isEmpty from 'lodash/fp/isEmpty';
import isNil from 'lodash/fp/isNil';
import rangeStep from 'lodash/fp/rangeStep';
import _toString from 'lodash/fp/toString';
import indexOf from 'lodash/fp/indexOf';
import {
  getChoices,
  getCurrentProgressionId,
  getQuestionType,
  getAnswerValues
} from '@coorpacademy/player-store/es/utils/state-extract';
import {editAnswer} from '@coorpacademy/player-store/es/actions/ui/answers';

const editAnswerAction = (options, {dispatch}) => (state, slide) => newValue => {
  return dispatch(
    editAnswer(
      getAnswerValues(slide, state),
      getQuestionType(slide),
      getCurrentProgressionId(state),
      newValue
    )
  );
};

const qcmProps = (options, store) => (state, slide) => {
  const answers = getAnswerValues(slide, state);
  const _editAnswerAction = editAnswerAction(options, store)(state, slide);
  return {
    type: 'qcm',
    answers: map(
      choice => ({
        title: choice.label,
        selected: includes(choice.label, answers),
        onClick: () => _editAnswerAction(choice)
      }),
      getChoices(slide)
    )
  };
};

const qcmDragProps = (options, store) => (state, slide) => {
  const answers = getAnswerValues(slide, state);
  return {
    type: 'qcmDrag',
    answers: map(choice => {
      const indexInAnswer = indexOf(choice.label, answers);
      return {
        title: choice.label,
        selected: indexInAnswer !== -1,
        order: indexInAnswer,
        onClick: () => editAnswerAction(options, store)(state, slide)(choice)
      };
    }, getChoices(slide))
  };
};

const qcmGraphicProps = (options, store) => (state, slide) => {
  const answers = getAnswerValues(slide, state);
  return {
    type: 'qcmGraphic',
    answers: map(
      choice => ({
        title: choice.label,
        image: get('media.src.0.url', choice),
        selected: includes(choice.label, answers),
        onClick: () => editAnswerAction(options, store)(state, slide)(choice)
      }),
      getChoices(slide)
    )
  };
};

const updateTemplateAnswer = (_answers, index, max) => value => {
  const answers = !_answers ? times(constant(undefined), max) : _answers;
  return map(a => (isNil(a) ? '' : a), set(index, value, answers));
};

const templateTextProps = (options, store) => (state, slide, choice, index) => {
  const {translate} = options;
  const answers = getAnswerValues(slide, state);
  return {
    type: choice.type,
    name: choice.name,
    placeholder: translate('Type here'),
    value: get(index, answers),
    onChange: pipe(
      updateTemplateAnswer(answers, index),
      editAnswerAction(options, store)(state, slide)
    )
  };
};

const templateSelectProps = (options, store) => (state, slide, choice, index) => {
  const {translate} = options;
  const answers = getAnswerValues(slide, state);
  const answer = get(index, answers);
  const temporaryOption = {
    name: translate('Select an answer'),
    value: '',
    validOption: false,
    selected: true
  };
  const selectOptions = choice.items.map(item => {
    return {
      name: item.text,
      value: item.text,
      validOption: true,
      selected: item.text === answer
    };
  });
  const maxLength = get('question.content.choices.length', slide);

  return {
    type: choice.type,
    name: choice.name,
    onChange: pipe(
      updateTemplateAnswer(answers, index, maxLength),
      editAnswerAction(options, store)(state, slide)
    ),
    options: isEmpty(answer) ? [temporaryOption].concat(selectOptions) : selectOptions
  };
};

const templateProps = (options, store) => (state, slide) => {
  return {
    type: 'template',
    template: slide.question.content.template,
    answers: slide.question.content.choices.map(
      (choice, index) =>
        choice.type === 'text'
          ? templateTextProps(options, store)(state, slide, choice, index)
          : templateSelectProps(options, store)(state, slide, choice, index)
    )
  };
};

const basicProps = (options, store) => (state, slide) => {
  const {translate} = options;
  return {
    type: 'freeText',
    placeholder: translate('Type here'),
    value: pipe(getAnswerValues, head)(slide, state),
    onChange: editAnswerAction(options, store)(state, slide)
  };
};

const toAnswer = values => {
  const maxValue = size(values) - 1;
  return position => {
    return pipe(multiply(maxValue), round, get(__, values), _toString)(position);
  };
};

const sliderProps = (options, store) => (state, slide) => {
  const values = rangeStep(
    slide.question.content.step || 1,
    slide.question.content.min,
    slide.question.content.max + 1
  );

  const stateValue = pipe(getAnswerValues, head)(slide, state);
  const currentValue = parseInt(stateValue);

  const indexValue = indexOf(currentValue, values);
  const handleChange = editAnswerAction(options, store)(state, slide);
  const sliderPosition = divide(indexValue, size(values) - 1);

  return {
    type: 'slider',
    placeholder: slide.question.explanation,
    minLabel: `${slide.question.content.min} ${slide.question.content.unitLabel}`,
    maxLabel: `${slide.question.content.max} ${slide.question.content.unitLabel}`,
    title: `${currentValue} ${slide.question.content.unitLabel}`,
    value: sliderPosition,
    onChange: pipe(toAnswer(values), handleChange)
  };
};

const createGetAnswerProps = (options, store) => (state, slide) => {
  const type = getQuestionType(slide);
  switch (type) {
    case 'qcm':
      return qcmProps(options, store)(state, slide);

    case 'qcmGraphic':
      return qcmGraphicProps(options, store)(state, slide);

    case 'qcmDrag':
      return qcmDragProps(options, store)(state, slide);

    case 'basic':
      return basicProps(options, store)(state, slide);

    case 'template':
      return templateProps(options, store)(state, slide);

    case 'slider':
      return sliderProps(options, store)(state, slide);

    default:
      return {};
  }
};

const createGetHelp = (options, store) => slide => {
  const {translate} = options;
  return get('question.explanation', slide) || translate('Select something below');
};

export {createGetAnswerProps, createGetHelp};
