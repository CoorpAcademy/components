import defaultsDeep from 'lodash/fp/defaultsDeep';
import failClosed from './fail-closed';

export default defaultsDeep(failClosed, {
  props: {
    klf: {
      open: true
    },
    header: {
      remainingLifeRequests: 1,
      remainingLifeRequestsSentence: 'Bonus ! Récupérez une vie en regardant la leçon !',
      cta: {
        title: 'Game Over'
      }
    }
  }
});
