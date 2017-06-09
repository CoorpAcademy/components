import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './all-are-openable';

export default defaultsDeep(Default, {
  props: {
    type: 'one'
  }
});
