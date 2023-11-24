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
            videoId: '1291025352652664897',
            mimeType: 'application/faurecia-vr',
            url: 'https://learning-lab-forvr-preprod.app.corp/Experiences/WebGL/1?player=true',
            width: '100%',
            height: '343px'
          }
        ]
      }
    }
  }
};
