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
        onPause: () => console.log('pause'),
        onResume: () => console.log('resume'),
        onEnded: () => console.log('end')
      }
    ]
  }
};
