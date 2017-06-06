export default {
  props: {
    header: {
      fail: false,
      lives: 1,
      title: 'Good Job',
      subtitle: 'Bonne réponse',
      cta: {
        title: 'Continue',
        onClick: () => {}
      }
    },
    question: {
      header: 'Par quel moyen les entreprises peuvent-elles connaître leur popularité sur les réseaux sociaux ?',
      answer: "Grâce à des outils d'analyse et de surveillance"
    },
    ressources: {
      title: 'Voir le cours',
      value: [
        {
          type: 'video',
          mimeType: 'application/vimeo',
          videoId: '166479793',
          description: 'De l’éco-conception à l’innovation responsable',
          poster: '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships-svp/cockpit-partner-svp/poster/poster-1480426784168.jpg',
          _id: '590b9be24f7b862e0046e577',
          subtitles: [],
          posters: [],
          src: [],
          selected: true,
          onClick: () => {}
        },
        {
          type: 'video',
          mimeType: 'application/vimeo',
          videoId: '166479793',
          description: 'De l’éco-conception à l’innovation responsable',
          poster: '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships-svp/cockpit-partner-svp/poster/poster-1480426784168.jpg',
          _id: '590b9be24f7b862e0046e577',
          subtitles: [],
          posters: [],
          src: [],
          selected: false,
          onClick: () => {}
        },
        {
          type: 'video',
          mimeType: 'application/vimeo',
          videoId: '166479793',
          description: 'De l’éco-conception à l’innovation responsable',
          poster: '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships-svp/cockpit-partner-svp/poster/poster-1480426784168.jpg',
          _id: '590b9be24f7b862e0046e577',
          subtitles: [],
          posters: [],
          src: [],
          selected: false,
          onClick: () => {}
        }
      ],
      open: false,
      onClick: () => {}
    },
    klf: {
      title: 'Point clés',
      value: "Les éco-innovations sont divisées en 3 catégories : intégrées, radicales et économie de la fonctionnalité. La dernière consiste à remplacer un produit par un service. C'est par exemple le cas du système Vélib'.",
      onClick: () => {},
      open: false
    },
    tips: {
      title: 'Le saviez vous',
      value: 'Les smart cities, ou villes intelligentes, portent des solutions dans lesquelles se conjuguent les 3 types d’éco-innovations. En France, il en existait vingt début 2016, la plus grande étant Paris.',
      onClick: () => {},
      open: false
    }
  }
};
