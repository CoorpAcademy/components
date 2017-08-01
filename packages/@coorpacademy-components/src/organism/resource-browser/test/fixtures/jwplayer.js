import JWPlayer from '../../../../molecule/video-player/test/fixtures/jwplayer';

export default {
  props: {
    resources: [
      {
        type: 'video',
        selected: true,
        ...JWPlayer.props
      }
    ]
  }
};
