import FreeText from '../../../../molecule/questions/free-text/test/fixtures/default';

export default {
  props: {
    model: {
      type: 'freeText',
      ...FreeText.props
    },
    media:
      'https://api-staging.coorpacademy.com/api-service/medias?h=400&w=400&q=90&url=http://europeantrips.org/wp-content/uploads/2012/03/Eiffel-Tower.jpg'
  }
};
