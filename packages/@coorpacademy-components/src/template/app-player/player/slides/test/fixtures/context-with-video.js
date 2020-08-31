import Context from './context';

export default {
  props: {
    ...Context.props,
    slideContext: {
      ...Context.props.slideContext,
      media: {
        type: 'video',
        src: [
          {
            _id: '5996ba9794cdfe4468eafe16',
            mimeType: 'application/h5p',
            url: 'https://coorpacademy.h5p.com/content/1291025352652664897/embed',
            width: '100%',
            height: '343px'
          }
        ]
      }
    }
  }
};
