import defaultsDeep from 'lodash/fp/defaultsDeep';
import Card from '../../../../../molecule/card/test/fixtures/default';
import correct from './correct';

export default defaultsDeep(correct, {
  props: {
    summary: {
      recommendation: {
        title: 'You should try:',
        cards: [Card.props, Card.props, Card.props]
      }
    }
  }
});
