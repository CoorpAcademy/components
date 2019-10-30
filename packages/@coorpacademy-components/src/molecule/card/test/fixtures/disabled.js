import cardContentDisabled from '../../../card-content/test/fixtures/disabled';
import Default from './default';

export default {
  props: {
    ...Default.props,
    ...cardContentDisabled.props
  }
};
