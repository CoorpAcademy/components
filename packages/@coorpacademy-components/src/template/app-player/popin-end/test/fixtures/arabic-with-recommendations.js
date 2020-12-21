import {defaultsDeep} from 'lodash/fp';
import Card from '../../../../../molecule/card/test/fixtures/arabic';
import correct from './arabic-correct';

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
