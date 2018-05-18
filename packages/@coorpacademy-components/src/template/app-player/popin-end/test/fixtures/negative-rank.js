import defaultsDeep from 'lodash/fp/defaultsDeep';
import loading from './loading';

export default defaultsDeep(loading, {
  props: {
    summary: {
      header: {
        type: 'popinEnd',
        title: 'Big Data - Avancé',
        subtitle: 'Félicitations !',
        failed: false,
        corrections: [{answer: 'Correct', isCorrect: true}],
        stars: '+29',
        rank: '-5',
        cta: {
          title: 'Next level',
          subtitle: 'Big Data - Coach',
          type: 'next-level',
          href: '#'
        }
      },
      footer: {
        title: 'Back to home',
        href: '#'
      }
    }
  }
});
