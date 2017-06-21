import defaultsDeep from 'lodash/fp/defaultsDeep';
import correct from './correct';

export default defaultsDeep(correct, {
  props: {
    action: {
      type: 'simple',
      prefix: 'Retry level:',
      title: 'Big Data - Coach',
      button: {
        title: 'Retry level',
        href: '#'
      }
    }
  }
});
