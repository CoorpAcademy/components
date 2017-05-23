import QcmImage from '../../../../questions/qcm-image/test/fixtures/default';
import Default from './default';

const answerProps = QcmImage.props;

export default {
  props: {
    ...Default.props,
    answer: {
      type: 'qcmImage',
      ...answerProps
    }
  }
};
