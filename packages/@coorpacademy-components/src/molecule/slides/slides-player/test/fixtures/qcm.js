import Answer from '../../../../../molecule/answer/test/fixtures/qcm';
import Default from './default';

export default {
  props: {
    typeClue: 'answer',
    ...Default.props,
    ...Answer.props
  }
};
