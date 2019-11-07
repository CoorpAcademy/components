import {defaultsDeep} from 'lodash/fp';
import Default from './default';

export default {
  props: defaultsDeep(Default.props, {
    hideContentBackground: true
  })
};
