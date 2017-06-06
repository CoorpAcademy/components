import defaultsDeep from 'lodash/fp/defaultsDeep';
import correctClosed from './correct-closed';

export default defaultsDeep(correctClosed, {
  props: {
    header: {
      cta: {
        title: 'Next Chapter',
        subtitle: "2/8 Qu'est ce que le Big Data ?"
      }
    }
  }
});
