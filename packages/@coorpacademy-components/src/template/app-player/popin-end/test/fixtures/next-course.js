import defaultsDeep from 'lodash/fp/defaultsDeep';
import Card from '../../../../../molecule/card/test/fixtures/default';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
      action: {
        type: 'nextCourse',
        prefix: 'Next chapter:',
        title: 'Le prochain chapitre qui a un titre vraiment trop long',
        card: Card.props
      },
      header: {
        type: 'popin-end',
        cta: {
          title: 'Home',
          type: 'home',
          href: '#'
        }
      }
    }
  }
});
