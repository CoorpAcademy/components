import QcmGraphic from '../../../questions/qcm-graphic/test/fixtures/default';
import {AnswerProps} from '../../prop-types';

type Fixture = {
  props: AnswerProps;
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
