import Qcm from '../../../../molecule/questions/qcm/test/fixtures/short-answers';

const answerProps = Qcm.props;

export default {
  props: {
    model: {
      type: 'qcm',
      ...answerProps
    },
    media:
      'https://api-staging.coorpacademy.com/api-service/medias?h=400&w=400&q=90&url=http://www.howitworksdaily.com/wp-content/uploads/2015/07/68_1.jpg'
  }
};
