import defaultsDeep from 'lodash/fp/defaultsDeep';
import correctClosed from './correct-closed';

export default defaultsDeep(correctClosed, {
  props: {
    header: null,
    question: {
      answer: null
    },
    ressources: {
      value: null
    },
    klf: {
      value: null
    },
    tips: {
      value: null
    }
  }
});
