import defaultsDeep from 'lodash/fp/defaultsDeep';
import failClosed from './fail-closed';

export default defaultsDeep(failClosed, {
  props: {
    header: {
      corrections: [
        {
          answer: 'Apple',
          isCorrect: false
        },
        {
          answer: 'Microsoft',
          isCorrect: true
        },
        {
          answer: 'Google',
          isCorrect: false
        },
        {
          answer: 'Facebook',
          isCorrect: true
        }
      ]
    }
  }
});
