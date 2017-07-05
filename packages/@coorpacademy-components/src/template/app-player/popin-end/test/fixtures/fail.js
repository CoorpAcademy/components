import defaultsDeep from 'lodash/fp/defaultsDeep';
import loading from './loading';

export default defaultsDeep(loading, {
  props: {
    summary: {
      header: {
        title: 'Oups...',
        subtitle: "Vous n'avez plus de vie...",
        fail: true,
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
