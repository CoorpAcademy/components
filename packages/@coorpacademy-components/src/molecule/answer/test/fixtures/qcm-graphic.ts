import QcmGraphic from '../../../questions/qcm-graphic/test/fixtures/default';
import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const answerProps = QcmGraphic.props;

const fixture: Fixture = {
  props: {
    model: {
      ...answerProps,
      type: 'qcmGraphic'
    },
    help: ''
  }
};

export default fixture;
