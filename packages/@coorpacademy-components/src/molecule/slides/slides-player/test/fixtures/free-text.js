import FreeText from '../../../../questions/free-text/test/fixtures/default';
import Default from './default';

export default {
  props: {
    ...Default.props,
    answer: {
      type: 'freeText',
      ...FreeText.props
    }
  }
};
