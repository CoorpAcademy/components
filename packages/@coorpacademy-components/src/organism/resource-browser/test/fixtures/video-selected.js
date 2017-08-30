export default {
  props: {
    resources: [
      {
        type: 'video',
        mimeType: 'application/vimeo',
        videoId: '166479793',
        description: 'De l’éco-conception à l’innovation responsable',
        poster:
          '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships-svp/cockpit-partner-svp/poster/poster-1480426784168.jpg',
        _id: '590b9be24f7b862e0046e577',
        subtitles: [],
        posters: [],
        src: [],
        selected: true,
        onClick: () => {},
        onPlay: () => console.log('play'),
        onResume: () => console.log('resume')
      },
      {
        type: 'video',
        poster: '//static.coorpacademy.com/content/digital/miniatures_cours/avance/1A1.png',
        description: 'Le concept de Knowledge Graph',
        mimeType: 'application/vimeo',
        videoId: '89404998\n',
        _id: '590b862e2e967f64333ad45f',
        subtitles: [],
        posters: [],
        src: [],
        selected: false,
        onClick: () => {}
      }
    ]
  }
};
