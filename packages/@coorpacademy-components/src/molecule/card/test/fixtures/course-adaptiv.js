import cardContentAdaptiv from '../../../card-content/test/fixtures/adaptiv';
import Default from './default';

export default {
  props: {
    ...Default.props,
    ...cardContentAdaptiv.props
  }
};
