import QcmImage from '../../../../molecule/questions/qcm-image/test/fixtures/default';

const answerProps = QcmImage.props;

export default {
  props: {
    answer: {
      type: 'qcmImage',
      ...answerProps
    }
  }
};
