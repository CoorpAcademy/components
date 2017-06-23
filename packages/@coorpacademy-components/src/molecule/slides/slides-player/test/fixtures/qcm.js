import Answer from '../../../../../molecule/answer/test/fixtures/qcm';
import Default from './default';

const answer = Answer.props;

export default {
  props: {
    ...Default.props,
    answer: {
      type: 'qcm',
      ...answer
    }
  }
};
