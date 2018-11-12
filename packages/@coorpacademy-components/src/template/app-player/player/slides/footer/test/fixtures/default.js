export default {
  props: {
    buttons: [
      {
        title: 'Question',
        type: 'question'
      },
      {
        title: 'Media',
        type: 'media'
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
