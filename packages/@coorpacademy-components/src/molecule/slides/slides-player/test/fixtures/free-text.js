import Answer from '../../../../../molecule/answer/test/fixtures/default';
import Default from './default';

export default {
  props: {
    typeClue: 'answer',
    ...Default.props,
    ...Answer.props
  }
};
