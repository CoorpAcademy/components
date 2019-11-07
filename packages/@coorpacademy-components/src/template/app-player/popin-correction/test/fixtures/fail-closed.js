import {defaultsDeep} from 'lodash/fp';
import correctClosed from './correct-closed';

export default defaultsDeep(correctClosed, {
  props: {
    header: {
      type: 'popinCorrection',
      failed: true,
      corrections: [
        {answer: 'Je ne sais pas et cela me rend vraiment triste ... sniff', isCorrect: false}
      ],
      title: 'Aïe Aïe Aïe',
      subtitle: 'Mauvaise réponse'
    },
    assistanceLink: {
      title: 'Signaler un problème avec cette question ?',
      onClick: () => console.log('test onClick')
    }
  }
});
