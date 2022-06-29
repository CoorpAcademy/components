import omit from 'lodash/fp/omit';
import AnswerQCMDrag from '../../../../../molecule/answer/test/fixtures/qcm-drag';
import oneRightState from './one-right';

const qcmDrag = AnswerQCMDrag.props;
const props = oneRightState.props;

export default {
  props: {
    ...omit(['slides'], props),
    reviewStatus: 'finished',
    slides: {
      ...props.slides,
      0: {
        ...props.slides[0],
        validationResult: 'success',
        endReview: true,
        questionText: 'Hey there, .....suspense.... ready to select some answers?',
        answerUI: qcmDrag
      },
      1: {
        hidden: false,
        position: 1,
        questionText: 'Hey there, .....suspense.... ready to select some answers?',
        answerUI: qcmDrag,
        endReview: true
      },
      2: {
        hidden: false,
        position: 2,
        endReview: true
      },
      3: {
        hidden: false,
        position: 3,
        endReview: true
      },
      4: {
        hidden: false,
        position: 4,
        endReview: true
      }
    }
  }
};
