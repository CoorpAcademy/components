import {defaultsDeep} from 'lodash/fp';
import failClosed from './fail-closed';

export default defaultsDeep(failClosed, {
  props: {
    header: {
      corrections: [
        {
          answer: '0',
          isCorrect: false
        },
        {
          answer: 'Deux',
          isCorrect: true
        },
        {
          answer: '2',
          isCorrect: true
        },
        {
          answer: '1',
          isCorrect: false
        }
      ]
    },
    assistanceLink: {
      title: 'Signaler un problème avec cette question ?',
      onClick: () => console.log('test onClick')
    }
  }
});
