import QcmGraphic from '../../../questions/qcm-graphic/test/fixtures/default';

const answerProps = QcmGraphic.props;

export default {
  props: {
    model: {
      ...answerProps,
      type: 'qcmGraphic'
    }
  }
};
