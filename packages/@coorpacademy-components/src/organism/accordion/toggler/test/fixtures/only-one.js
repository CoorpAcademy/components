import {defaultsDeep} from 'lodash/fp';
import Default from './all-are-openable';

export default defaultsDeep(Default, {
  props: {
    oneTabOnly: true
  }
});
