import Qcm from '../../../questions/qcm/test/fixtures/short-answers';

const answerProps = Qcm.props;

export default {
  props: {
    model: {
      ...answerProps,
      type: 'qcm'
    },
    media: {
      type: 'img',
      url:
        'https://static.coorpacademy.com/content/CoorpAcademy/content-chanel/cockpit-ilearnchanel/default/19-1477921258654.jpg'
    }
  }
};
