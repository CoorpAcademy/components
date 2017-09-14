import defaultsDeep from 'lodash/fp/defaultsDeep';
import failClosed from './fail-closed';

export default defaultsDeep(failClosed, {
  props: {
    klf: {
      open: true
    },
    header: {
      extraLife: {
        active: true, 
        sentence: 'Bonus ! Récupérez une vie en regardant la leçon !'
      },
      cta: {
        title: 'Game Over'
      }
    }
  }
});
