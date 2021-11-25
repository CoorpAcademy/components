import Qcm from '../../../questions/qcm/test/fixtures/arabic';

const answerProps = Qcm.props;

export default {
  props: {
    model: {
      ...answerProps,
      type: 'qcm'
    },
    media: {
      type: 'img',
      url: 'https://user-images.githubusercontent.com/7602475/28273504-db1da18a-6b0e-11e7-97cd-b2e307fc51c7.png'
    }
  }
};
