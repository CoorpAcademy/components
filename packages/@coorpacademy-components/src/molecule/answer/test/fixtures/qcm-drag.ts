import QcmDrag from '../../../questions/qcm-drag/test/fixtures/default';
import {Props} from '../../prop-types';

const answerProps = QcmDrag.props;

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    model: {
      ...answerProps,
      type: 'qcmDrag'
    },
    help: 'Help text will appear here'
  }
};

export default fixture;
