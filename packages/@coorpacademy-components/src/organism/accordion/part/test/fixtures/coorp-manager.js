import {defaultsDeep} from 'lodash/fp';
import Default from './default';

export default defaultsDeep(Default, {
  props: {
    isOpen: true,
    theme: 'setup'
  }
});
