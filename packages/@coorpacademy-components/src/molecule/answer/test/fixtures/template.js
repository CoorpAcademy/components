import Template from '../../../questions/template/test/fixtures/default';

export default {
  props: {
    model: {
      type: 'template',
      ...Template.props
    },
    media:
      'https://api-staging.coorpacademy.com/api-service/medias?h=400&w=400&q=90&url=http://europeantrips.org/wp-content/uploads/2012/03/Eiffel-Tower.jpg'
  }
};
