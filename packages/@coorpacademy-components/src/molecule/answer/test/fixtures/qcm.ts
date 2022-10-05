import Qcm from '../../../questions/qcm/test/fixtures/default';

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
      url: 'https://api-staging.coorpacademy.com/api-service/medias?h=300&w=300&q=90&url=https://user-images.githubusercontent.com/7602475/28273504-db1da18a-6b0e-11e7-97cd-b2e307fc51c7.png'
    },
    help: ''
  }
};

export default fixture;
