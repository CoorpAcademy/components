import QcmImage from '../../../../molecule/questions/qcm-image/test/fixtures/default';

const answerProps = QcmImage.props;

export default {
  props: {
    model: {
      type: 'qcmImage',
      ...answerProps
    }
  }
};
