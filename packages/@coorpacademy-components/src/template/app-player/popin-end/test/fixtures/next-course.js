import defaultsDeep from 'lodash/fp/defaultsDeep';
import Card from '../../../../../molecule/card/test/fixtures/default';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
      action: {
        type: 'nextCourse',
        description: 'Validate your skills!',
        prefix: 'See course:',
        title: 'Big Data',
        card: Card.props
      }
    }
  }
});
