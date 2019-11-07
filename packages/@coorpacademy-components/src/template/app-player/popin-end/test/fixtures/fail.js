import {defaultsDeep} from 'lodash/fp';
import loading from './loading';

export default defaultsDeep(loading, {
  props: {
    summary: {
      header: {
        type: 'popinEnd',
        title: 'Oups...',
        subtitle: "Vous n'avez plus de vie...",
        failed: true,
        corrections: [{answer: 'Correct', isCorrect: false}],
        lives: 0,
        cta: {
          title: 'Retry level',
          href: '#'
        }
      }
    }
  }
});
