export default {
  props: {
    type: 'audio',
    description: "Chapitre 1. Diagramme du l'hiérarchie du contenu.",
    mediaUrl:
      '//static.coorpacademy.com/content/CoorpAcademy/content-bnpp/cockpit-letsgetdigital-migration/raw/sample-1618502603227.aac',
    onPlay: () => console.log('played audio!')
  }
};
