export default {
  props: {
    buttons: [
      {
        title: 'Media',
        type: 'media'
      },
      {
        title: 'Clue',
        type: 'clue',
        hasClue: true,
        selected: true
      },
      {
        title: 'Coach',
        type: 'coach'
      }
    ]
  }
};
