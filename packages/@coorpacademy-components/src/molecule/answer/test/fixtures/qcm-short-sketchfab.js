import Qcm from '../../../questions/qcm/test/fixtures/short-answers';
import Sketchfab from '../../../../atom/sketchfab/test/fixtures/pikachu';
import {TYPE_SKETCHFAB} from '../..';

const answerProps = Qcm.props;

export default {
  props: {
    model: {
      type: 'qcm',
      ...answerProps
    },
    media: {
      type: TYPE_SKETCHFAB,
      ...Sketchfab.props
    }
  }
};
