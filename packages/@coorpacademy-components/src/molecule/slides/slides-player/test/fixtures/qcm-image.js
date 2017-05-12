import Cta from '../../../../../atom/cta/test/fixtures/default';
import QcmImage from '../../../../questions/qcm-image/test/fixtures/default';

const {props} = Cta;
const answerProps = QcmImage.props;

export default {
  props: {
    progression: {
      current: 2,
      total: 6
    },
    question: 'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
    cta: props,
    help: 'Select something below',
    answer: {
      type: 'qcmimage',
      ...answerProps
    }
  }
};
