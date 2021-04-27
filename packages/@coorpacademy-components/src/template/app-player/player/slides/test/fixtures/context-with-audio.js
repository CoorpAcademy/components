import Context from './context';

export default {
  props: {
    ...Context.props,
    slideContext: {
      ...Context.props.slideContext,
      media: {
        type: 'audio',
        description: 'Audio description',
        mimeType: 'audio/aac',
        poster: 'https://picsum.photos/500/300',
        mediaUrl:
          '//static.coorpacademy.com/content/CoorpAcademy/content-bnpp/cockpit-letsgetdigital-migration/raw/sample-1618502603227.aac'
      }
    }
  }
};
