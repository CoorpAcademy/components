import defaultsDeep from 'lodash/fp/defaultsDeep';
import Card from '../../../../../molecule/card/test/fixtures/default';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
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
  }
});
