import defaultsDeep from 'lodash/fp/defaultsDeep';
import Card from '../../../../../molecule/card/test/fixtures/default';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
      action: {
        type: 'nextCourse',
        description: 'Check out the next chapter in this course!',
        prefix: 'Next chapter:',
        title: 'Le prochain chapitre qui a un titre vraiment trop long',
        card: Card.props
      }
    }
  }
});
