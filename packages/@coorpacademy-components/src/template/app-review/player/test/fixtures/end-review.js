import omit from 'lodash/fp/omit';
import AnswerQCMDrag from '../../../../../molecule/answer/test/fixtures/qcm-drag';
import oneRightState from './one-right';

const qcmDrag = AnswerQCMDrag.props;
const props = oneRightState.props;

export default {
  props: {
    ...omit(['uiSlides', 'progression'], props),
    reviewStatus: 'finished',
    progression: {
      _id: '62b1d1087aa12f00253f40e2',
      state: {
        isCorrect: true,
        nextContent: {
          type: 'success',
          ref: 'successExitNode'
        }
      }
    },
    uiSlides: {
      '0': {
        ...props.uiSlides['0'],
        isCorrect: true,
        endReview: true,
        questionText: 'Hey there, .....suspense.... ready to select some answers?',
        answerUI: qcmDrag
      },
      '1': {
        hidden: false,
        position: 1,
        questionText: 'Hey there, .....suspense.... ready to select some answers?',
        answerUI: qcmDrag,
        endReview: true
      },
      '2': {
        hidden: false,
        position: 2,
        endReview: true
      },
      '3': {
        hidden: false,
        position: 3,
        endReview: true
      },
      '4': {
        hidden: false,
        position: 4,
        endReview: true
      }
    }
  }
};
