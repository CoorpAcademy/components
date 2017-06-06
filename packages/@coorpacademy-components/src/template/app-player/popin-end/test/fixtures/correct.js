export default {
  props: {
    fail: false,
    lives: 1,
    resume: {
      submitValue: 'Coorpacademy',
      onClick: () => {}
    },
    klf: "Les éco-innovations sont divisées en 3 catégories : intégrées, radicales et économie de la fonctionnalité. La dernière consiste à remplacer un produit par un service. C'est par exemple le cas du système Vélib'.",
    tips: 'Les smart cities, ou villes intelligentes, portent des solutions dans lesquelles se conjuguent les 3 types d’éco-innovations. En France, il en existait vingt début 2016, la plus grande étant Paris.',
    lessons: [
      {
        type: 'video',
        mimeType: 'application/vimeo',
        videoId: '166479793',
        description: 'De l’éco-conception à l’innovation responsable',
        poster: '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships-svp/cockpit-partner-svp/poster/poster-1480426784168.jpg',
        _id: '590b9be24f7b862e0046e577',
        subtitles: [],
        posters: [],
        src: []
      }
    ]
  }
};
