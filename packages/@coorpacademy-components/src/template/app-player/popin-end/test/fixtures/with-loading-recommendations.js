import defaultsDeep from 'lodash/fp/defaultsDeep';
import correct from './correct';

export default defaultsDeep(correct, {
  props: {
    summary: {
      recommendation: {
        title: 'You should try:',
        cards: null
      }
    }
  }
});
