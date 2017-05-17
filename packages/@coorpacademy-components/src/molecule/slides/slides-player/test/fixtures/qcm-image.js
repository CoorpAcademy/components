import Cta from '../../../../../atom/cta/test/fixtures/default';
import QcmImage from '../../../../questions/qcm-image/test/fixtures/default';
import Footer from '../../../slides-footer/test/fixtures/default';

const {props} = Cta;
const answerProps = QcmImage.props;
const footerProps = Footer.props;

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
      type: 'qcmImage',
      ...answerProps
    },
    ...footerProps
  }
};
