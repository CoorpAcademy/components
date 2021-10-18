import Context from './context';

export default {
  props: {
    ...Context.props,
    slideContext: {
      ...Context.props.slideContext,
      media: {
        type: 'img',
        src: [
          {
            _id: '5981f15f77c724d828e862e4',
            mimeType: 'image/jpeg',
            url:
              'https://api-staging.coorpacademy.com/api-service/medias?h=400&w=400&q=90&url=http://static.coorpacademy.com/content/CoorpAcademy/content/cockpitRecette-joan/default/corbeau-1501504511632.jpg'
          }
        ]
      }
    }
  }
};
