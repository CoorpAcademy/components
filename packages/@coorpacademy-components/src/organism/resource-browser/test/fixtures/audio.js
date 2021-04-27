export default {
  props: {
    resources: [
      {
        type: 'audio',
        description: "Chapitre 1. Diagramme du l'hiérarchie du contenu.",
        mediaUrl:
          '//static.coorpacademy.com/content/CoorpAcademy/content-bnpp/cockpit-letsgetdigital-migration/raw/sample-1618502603227.aac',
        _id: '590b9be24f7b862e0046e577',
        poster:
          '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships-svp/cockpit-partner-svp/poster/poster-1480426784168.jpg',
        subtitles: [],
        posters: [],
        src: [],
        selected: true,
        onClick: () => {},
        onPlay: () => console.log('played audio!')
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
