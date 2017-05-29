import pipe from 'lodash/fp/pipe';
import includes from 'lodash/fp/includes';
import head from 'lodash/fp/head';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import {getChoices, getProgressionId, getQuestionType} from '../utils/state-extract';
import {editAnswer} from '../actions/ui/answers';

const editAnswerAction = (state, slide, dispatch) => newValue => {
  dispatch(
    editAnswer(get('ui.answers', state), getQuestionType(slide), getProgressionId(state), newValue)
  );
};

const qcmProps = (state, slide, dispatch) => ({
  type: 'qcm',
  answers: map(choice => ({
    title: choice.label,
    selected: pipe(get('ui.answers'), includes(choice.label))(state),
    onClick: () => editAnswerAction(state, slide, dispatch)(choice)
  }))(getChoices(slide))
});

const qcmTemplateProps = (state, slide, dispatch) => ({
  type: 'freeText',
  placeholder: 'Type here',
  value: pipe(get('ui.answers'), head)(state),
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
