import pipe from 'lodash/fp/pipe';
import includes from 'lodash/fp/includes';
import head from 'lodash/fp/head';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
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
  return {
    type: 'qcm',
    answers: map(choice => ({
      title: choice.label,
      selected: pipe(getAnswerValues, includes(choice.label))(state),
      onClick: () => editAnswerAction(options, store)(state, slide)(choice)
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

const templateTextProps = (translate, answer, choice) => {
  return {
    type: choice.type,
    name: choice.name,
    placeholder: translate('Type here'),
    value: answer,
    onChange: () => {} // TODO
  };
};

const templateSelectProps = (answer, choice) => {
  return {
    type: choice.type,
    name: choice.name,
    options: choice.items.map((item, index) => {
      return {
        name: item.text,
        value: item.value,
        selected: (answer === undefined && index === 0) || item.value === answer,
        onChange: () => {} // TODO
      };
    })
  };
};

const templateProps = (options, store) => (state, slide) => {
  const {translate} = options;
  const answers = getAnswerValues(state);
  return {
    type: 'template',
    template: slide.question.content.template,
    answers: slide.question.content.choices.map(
      (choice, index) =>
        choice.type === 'text'
          ? templateTextProps(translate, get(index, answers), choice)
          : templateSelectProps(get(index, answers), choice)
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
