import pipe from 'lodash/fp/pipe';
import includes from 'lodash/fp/includes';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import {getChoices, getProgressionId, questionType} from './state-extract';
import {editAnswer} from './actions/ui';

const qcmProps = (state, slide, dispatch) => ({
  type: 'qcm',
  answers: map(choice => ({
    title: choice.label,
    selected: pipe(get('ui.answers'), includes(choice.label))(state),
    onClick: () => {
      dispatch(editAnswer(questionType(slide))(getProgressionId(state), choice));
    }
  }))(getChoices(slide))
});

const qcmTemplateProps = (state, slide, dispatch) => ({
  type: 'freeText',
  placeholder: 'Type here',
  value: get('ui.answers')(state),
  onChange: value => {
    dispatch(editAnswer(questionType(slide))(getProgressionId(state), value));
  }
});

export default function getAnswerProps(slide, state, dispatch) {
  switch (questionType(slide)) {
    case 'qcm':
      return qcmProps(state, slide, dispatch);

    case 'template':
    default:
      return qcmTemplateProps(state, slide, dispatch);
  }
}
