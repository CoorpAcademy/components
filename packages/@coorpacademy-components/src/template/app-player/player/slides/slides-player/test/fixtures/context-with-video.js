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
            videoId: '91775232',
            mimeType: 'application/vimeo',
            width: '640px',
            height: '360px'
          }
        ]
      }
    }
  }
};
