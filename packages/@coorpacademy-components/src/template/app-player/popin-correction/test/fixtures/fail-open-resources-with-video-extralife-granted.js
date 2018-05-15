import defaultsDeep from 'lodash/fp/defaultsDeep';
import failClosed from './fail-closed';

export default defaultsDeep(failClosed, {
  props: {
    extraLifeGranted: true,
    resources: {
      open: true
    }
  }
});
