import defaultsDeep from 'lodash/fp/defaultsDeep';
import correctClosed from './correct-closed';

export default defaultsDeep(correctClosed, {
  props: {
    header: {
      fail: true,
      corrections: [{answer: 'Je ne sais pas', isCorrect: false}],
      title: 'Aïe Aïe Aïe',
      subtitle: 'Mauvaise réponse'
    }
  }
});
