import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

export default defaultsDeep(Default, {
  props: {
    open: true
  }
});
