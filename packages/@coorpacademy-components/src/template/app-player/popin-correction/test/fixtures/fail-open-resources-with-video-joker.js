import defaultsDeep from 'lodash/fp/defaultsDeep';
import failClosed from './fail-closed';

export default defaultsDeep(failClosed, {
  props: {
    resources: {
      open: true
    },
    header: {
      extraLife: {
        active: true
      }
    },
    joker: {
      title: 'quit',
      href: '#'
    }
  }
});
