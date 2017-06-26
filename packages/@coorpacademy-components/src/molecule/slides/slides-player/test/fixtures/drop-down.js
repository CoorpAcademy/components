import Answer from '../../../../../molecule/answer/test/fixtures/drop-down';
import Default from './default';

export default {
  props: {
    typeClue: 'answer',
    ...Default.props,
    ...Answer.props
  }
};
