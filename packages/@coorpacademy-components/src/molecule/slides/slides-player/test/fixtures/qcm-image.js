import Answer from '../../../../../molecule/answer/test/fixtures/qcm-image';
import Default from './default';

export default {
  props: {
    typeClue: 'answer',
    ...Default.props,
    ...Answer.props
  }
};
