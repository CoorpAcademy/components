import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

export default {
  props: defaultsDeep(Default.props, {
    hideContentBackground: true
  })
};
