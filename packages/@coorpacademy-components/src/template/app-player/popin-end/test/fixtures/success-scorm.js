import {defaultsDeep} from 'lodash/fp';
import Card from '../../../../../molecule/card/test/fixtures/default';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
      Mode: 'scorm',
      action: {
        type: 'nextCourse',
        prefix: 'Next chapter:',
        title: 'Le prochain chapitre qui a un titre vraiment trop long',
        card: Card.props
      },
      header: {
        type: 'popinEnd',
        cta: {
          title: 'Home',
          type: 'home',
          href: '#'
        }
      }
    }
  }
});
