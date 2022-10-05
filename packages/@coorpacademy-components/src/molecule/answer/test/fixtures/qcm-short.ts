import Qcm from '../../../questions/qcm/test/fixtures/short-answers';

import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const answerProps = Qcm.props;

const fixture: Fixture = {
  props: {
    model: {
      ...answerProps,
      type: 'qcm'
    },
    media: {
      type: 'img',
      url: 'https://static.coorpacademy.com/content/CoorpAcademy/content-chanel/cockpit-ilearnchanel/default/19-1477921258654.jpg'
    },
    help: ''
  }
};

export default fixture;
