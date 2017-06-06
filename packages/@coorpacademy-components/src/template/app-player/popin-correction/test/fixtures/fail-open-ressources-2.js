import defaultsDeep from 'lodash/fp/defaultsDeep';
import failClosed from './fail-closed';

export default defaultsDeep(failClosed, {
  props: {
    ressources: {
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
