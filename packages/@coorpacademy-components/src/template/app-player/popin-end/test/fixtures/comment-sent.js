import defaultsDeep from 'lodash/fp/defaultsDeep';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
      comment: {
        isSent: true
      }
    }
  }
});
