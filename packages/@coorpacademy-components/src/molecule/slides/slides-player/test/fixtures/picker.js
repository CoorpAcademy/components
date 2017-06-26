import Answer from '../../../../../molecule/answer/test/fixtures/picker';
import Default from './default';

export default {
  props: {
    typeClue: 'answer',
    ...Default.props,
    ...Answer.props
  }
};
