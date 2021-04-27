export default {
  props: {
    type: 'audio',
    poster: 'https://i.pinimg.com/originals/c4/a7/ba/c4a7ba862d5a4fec87db9bdfcf3ace7a.gif',
    mediaUrl:
      '//static.coorpacademy.com/content/CoorpAcademy/content-bnpp/cockpit-letsgetdigital-migration/raw/sample-1618502603227.aac',
    onPlay: () => console.log('played audio!')
  }
};
