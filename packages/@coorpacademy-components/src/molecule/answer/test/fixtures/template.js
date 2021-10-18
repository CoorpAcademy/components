import Template from '../../../questions/template/test/fixtures/multiple';

export default {
  props: {
    model: {
      ...Template.props,
      type: 'template'
    },
    media: {
      type: 'img',
      url:
        'https://api-staging.coorpacademy.com/api-service/medias?h=400&w=400&q=90&url=http://europeantrips.org/wp-content/uploads/2012/03/Eiffel-Tower.jpg'
    }
  }
};
