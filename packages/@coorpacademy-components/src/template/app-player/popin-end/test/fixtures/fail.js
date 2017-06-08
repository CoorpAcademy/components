import defaultsDeep from 'lodash/fp/defaultsDeep';
import Card from '../../../../../molecule/card/test/fixtures/default';
import loading from './loading';

export default defaultsDeep(loading, {
  props: {
    header: {
      title: 'Oups...',
      subtitle: "Vous n'avez plus de vie...",
      fail: true,
      lives: 0,
      cta: {
        title: 'Retry level',
        href: '#'
      }
    },
    recommendation: {
      value: [Card.props, Card.props, Card.props]
    }
  }
});
