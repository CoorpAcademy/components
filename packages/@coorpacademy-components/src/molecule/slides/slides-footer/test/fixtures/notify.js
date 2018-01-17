export default {
  props: {
    buttons: [
      {
        title: 'Media',
        type: 'media',
        notify: true
      },
      {
        title: 'Clue',
        type: 'clue',
        hasClue: true
      },
      {
        title: 'Coach',
        type: 'coach'
      }
    ]
  }
};
