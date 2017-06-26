import QcmImage from '../../../../molecule/questions/qcm-image/test/fixtures/default';

const answerProps = QcmImage.props;

export default {
  props: {
    question: {
      type: 'qcmImage',
      ...answerProps
    }
  }
};
