import defaultsDeep from 'lodash/fp/defaultsDeep';
import correctClosed from './correct-closed';

export default defaultsDeep(correctClosed, {
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
