import JWPlayer from '../../../../molecule/video-player/test/fixtures/jwplayer-with-subtitles';

export default {
  props: {
    overlay: {
      title: 'Bonus !',
      text: 'Récupérez une vie en regardant la leçon !',
      lifeAmount: 1
    },
    resources: [
      {
        ...JWPlayer.props,
        type: 'video',
        poster: '//static.coorpacademy.com/content/digital/miniatures_cours/avance/1A1.png',
        description: 'Le concept de Knowledge Graph',
        _id: '590b862e2e967f64333ad45f',
        subtitles: [],
        posters: [],
        src: [],
        onClick: () => {},
        onPlay: () => console.log('play'),
        onPause: () => console.log('pause'),
        onResume: () => console.log('resume'),
        onEnded: () => console.log('end'),
        selected: true
      },
      {
        type: 'video',
        poster: '//static.coorpacademy.com/content/digital/miniatures_cours/avance/1A1.png',
        description: 'Le concept de Knowledge Graph',
        mimeType: 'application/vimeo',
        videoId: '89404998\n',
        _id: '590b862e2e967f64333ad45e',
        subtitles: [],
        posters: [],
        src: [],
        selected: false,
        onClick: () => {}
      }
    ]
  }
};
