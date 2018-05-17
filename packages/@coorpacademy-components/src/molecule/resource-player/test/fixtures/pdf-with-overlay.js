export default {
  props: {
    resource: {
      type: 'pdf',
      description: "Chapitre 1. Diagramme du l'hiérarchie du contenu.",
      mediaUrl:
        'https://static.coorpacademy.com/content/CoorpAcademy/content/cockpit-mooc-technique/raw/hierachie-contenu-1494494029567.pdf',
      _id: '590b9be24f7b862e0046e577',
      subtitles: [],
      posters: [],
      src: [],
      onClick: () => {},
      onPlay: () => console.log('viewed pdf!')
    },
    overlay: {
      title: 'Bonus !',
      text: 'Récupérez une vie en regardant la leçon !',
      lifeAmount: 1
    }
  }
};
