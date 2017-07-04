import defaultsDeep from 'lodash/fp/defaultsDeep';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
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
  }
});
