import Answer from '../../../../../molecule/answer/test/fixtures/default';
import Default from './default';

export default {
  props: {
    typeClue: false,
    ...Default.props,
    ...Answer.props
  }
};
