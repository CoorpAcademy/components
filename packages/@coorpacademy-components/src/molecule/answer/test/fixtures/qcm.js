import Qcm from '../../../../molecule/questions/qcm/test/fixtures/default';

const answerProps = Qcm.props;

export default {
  props: {
    model: {
      type: 'qcm',
      ...answerProps
    },
    media: 'http://i2.kym-cdn.com/photos/images/facebook/000/437/645/a9d.jpg'
  }
};
