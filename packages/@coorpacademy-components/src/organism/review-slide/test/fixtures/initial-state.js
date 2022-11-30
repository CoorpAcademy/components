import cloneDeep from 'lodash/fp/cloneDeep';
import map from 'lodash/fp/map';
import set from 'lodash/fp/set';
import AnswerQCMGraphic from '../../../../molecule/answer/test/fixtures/qcm-graphic';

const markAnswersAsUnselected = answer => set('selected', false, answer);
const qcmGraphic = cloneDeep(AnswerQCMGraphic.props);
qcmGraphic.model.answers = map(markAnswersAsUnselected, AnswerQCMGraphic.props.model.answers);

export default {
  props: {
    slide: {
      hidden: false,
      position: 0,
      loading: false,
      parentContentTitle: 'From "Master Design Thinking to become more agile" course',
      questionText:
        'Lorsque vous cherchez à développer une intelligence culturelle, quels sont les trois comportements <i>fondamentaux</i> que vous devrez adopter',
      answerUI: qcmGraphic,
      showCorrectionPopin: false
    },
    validateButton: {
      label: 'Validate',
      onClick: () => console.log('onValidateClick'),
      disabled: true
    }
  }
};
