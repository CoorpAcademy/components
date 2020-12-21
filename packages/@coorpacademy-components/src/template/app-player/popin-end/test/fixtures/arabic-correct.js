import {defaultsDeep} from 'lodash/fp';
import SlidesHeader from '../../../player/slides/header/test/fixtures/arabic-learner';
import loading from './loading';

const headerProps = SlidesHeader.props;

export default defaultsDeep(loading, {
  props: {
    header: headerProps,
    summary: {
      header: {
        type: 'popinEnd',
        title: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p> - Avancé',
        subtitle: 'Félicitations !',
        failed: false,
        corrections: [{answer: 'Correct', isCorrect: true}],
        stars: '+29',
        rank: '+5',
        cta: {
          title: 'Next level',
          subtitle: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p> - Coach',
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
