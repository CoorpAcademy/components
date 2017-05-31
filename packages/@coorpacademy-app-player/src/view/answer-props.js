import pipe from 'lodash/fp/pipe';
import includes from 'lodash/fp/includes';
import head from 'lodash/fp/head';
import map from 'lodash/fp/map';
import {getChoices, getProgressionId, getQuestionType, getAnswers} from '../utils/state-extract';
import {editAnswer} from '../actions/ui/answers';

const editAnswerAction = (state, slide, dispatch) => newValue => {
  return dispatch(
    editAnswer(getAnswers(state), getQuestionType(slide), getProgressionId(state), newValue)
  );
};

const qcmProps = (state, slide, dispatch) => {
  return {
    type: 'qcm',
    answers: map(choice => ({
      title: choice.label,
      selected: pipe(getAnswers, includes(choice.label))(state),
      onClick: () => editAnswerAction(state, slide, dispatch)(choice)
    }))(getChoices(slide))
  };
};

const qcmTemplateProps = (state, slide, dispatch) => ({
  type: 'freeText',
  placeholder: 'Type here',
  value: pipe(getAnswers, head)(state),
  onChange: editAnswerAction(state, slide, dispatch)
});

export default function getAnswerProps(state, slide, dispatch) {
  const type = getQuestionType(slide);
  switch (type) {
    case 'qcm':
      return qcmProps(state, slide, dispatch);

    case 'template':
    default:
      return qcmTemplateProps(state, slide, dispatch);
  }
}
