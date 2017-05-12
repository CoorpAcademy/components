import Cta from '../../../../../atom/cta/test/fixtures/default';
import Qcm from '../../../../questions/qcm/test/fixtures/default';

const {props} = Cta;
const answerProps = Qcm.props;

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
      type: 'qcm',
      ...answerProps
    }
  }
};
