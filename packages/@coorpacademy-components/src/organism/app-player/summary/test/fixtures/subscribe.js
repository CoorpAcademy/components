import defaultsDeep from 'lodash/fp/defaultsDeep';
import Card from '../../../../../molecule/card/test/fixtures/default';
import correct from './correct';

export default defaultsDeep(correct, {
  props: {
    action: {
      type: 'subscribe',
      description: 'Abonnez vous  pour passer le niveau supérieur:',
      title: 'Big Data - Coach',
      button: {
        title: 'Abonnement Coorpacademy',
        href: '#'
      },
      card: Card.props
    }
  }
});
