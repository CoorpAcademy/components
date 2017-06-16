import defaultsDeep from 'lodash/fp/defaultsDeep';
import failClosed from './fail-closed';

export default defaultsDeep(failClosed, {
  props: {
    resources: {
      open: true,
      value: [
        {
          selected: false
        },
        {
          selected: true
        }
      ]
    }
  }
});
