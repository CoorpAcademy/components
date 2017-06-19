import defaultsDeep from 'lodash/fp/defaultsDeep';
import Card from '../../../../../molecule/card/test/fixtures/default';
import correct from './correct';

export default defaultsDeep(correct, {
  props: {
    action: {
      type: 'nextCourse',
      description: 'Validate your skills!',
      prefix: 'See course:',
      title: 'Big Data',
      card: Card.props
    }
  }
});
