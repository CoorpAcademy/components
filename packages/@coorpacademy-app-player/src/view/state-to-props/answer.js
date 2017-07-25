import pipe from 'lodash/fp/pipe';
import includes from 'lodash/fp/includes';
import head from 'lodash/fp/head';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import toArray from 'lodash/fp/toArray';
import {
  getChoices,
  getCurrentProgressionId,
  getQuestionType,
  getAnswerValues
} from '../../utils/state-extract';
import {editAnswer} from '../../actions/ui/answers';

const editAnswerAction = (options, {dispatch}) => (state, slide) => newValue => {
  return dispatch(
    editAnswer(
      getAnswerValues(state),
      getQuestionType(slide),
      getCurrentProgressionId(state),
      newValue
    )
  );
};

const qcmProps = (options, store) => (state, slide) => {
  const answers = getAnswerValues(state);
  const _editAnswerAction = editAnswerAction(options, store)(state, slide);
  return {
    type: 'qcm',
    answers: map(choice => ({
      title: choice.label,
      selected: includes(choice.label, answers),
      onClick: () => _editAnswerAction(choice)
    }))(getChoices(slide))
  };
};
const qcmImageProps = (options, store) => (state, slide) => {
  return {
    type: 'qcmGraphic',
    answers: map(choice => ({
      title: choice.label,
      image: get('media.src.0.url', choice),
      selected: pipe(getAnswerValues, includes(choice.label))(state),
      onClick: () => editAnswerAction(options, store)(state, slide)(choice)
    }))(getChoices(slide))
  };
};

const updateTemplateAnswer = (answers, index) => value => toArray(set(index, value, answers));

const templateTextProps = (options, store) => (state, slide, choice, index) => {
  const {translate} = options;
  const answers = getAnswerValues(state);
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
  const answers = getAnswerValues(state);
  const answer = get(index, answers);
  return {
    type: choice.type,
    name: choice.name,
    onChange: pipe(
      updateTemplateAnswer(answers, index),
      editAnswerAction(options, store)(state, slide)
    ),
    options: choice.items.map((item, itemIndex) => {
      return {
        name: item.text,
        value: item.value,
        selected: (answer === undefined && itemIndex === 0) || item.value === answer
      };
    })
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
    value: pipe(getAnswerValues, head)(state),
    onChange: editAnswerAction(options, store)(state, slide)
  };
};

const createGetAnswerProps = (options, store) => (state, slide) => {
  const type = getQuestionType(slide);
  switch (type) {
    case 'qcm':
      return qcmProps(options, store)(state, slide);

    case 'qcmGraphic':
      return qcmImageProps(options, store)(state, slide);

    case 'basic':
      return basicProps(options, store)(state, slide);

    case 'template':
      return templateProps(options, store)(state, slide);

    default:
      return {};
  }
};

export default createGetAnswerProps;
