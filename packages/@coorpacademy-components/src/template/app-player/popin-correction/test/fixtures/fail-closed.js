import defaultsDeep from 'lodash/fp/defaultsDeep';
import correctClosed from './correct-closed';

export default defaultsDeep(correctClosed, {
  props: {
    header: {
      fail: true,
      title: 'Aïe Aïe Aïe',
      subtitle: 'Mauvaise réponse'
    }
  }
});
