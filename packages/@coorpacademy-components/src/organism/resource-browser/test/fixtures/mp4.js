import mp4 from '../../../../molecule/video-player/test/fixtures/mp4';

export default {
  props: {
    resources: [
      {
        type: 'video',
        poster: '//static.coorpacademy.com/content/digital/miniatures_cours/avance/1A1.png',
        description: 'Big Buck Bunny video',
        _id: '590b862e2e967f64333ad45f',
        subtitles: [],
        posters: [],
        src: [],
        onClick: () => {},
        selected: true,
        ...mp4.props
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
