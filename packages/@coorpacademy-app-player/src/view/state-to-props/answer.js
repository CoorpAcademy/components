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

const templateProps = (options, store) => (state, slide) => {
  const {translate} = options;
  return {
    type: 'template',
    placeholder: translate('Type here'),
    value: pipe(getAnswerValues, head)(state),
    onChange: editAnswerAction(options, store)(state, slide)
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
