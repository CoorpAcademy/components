export default {
  props: {
    buttons: [
      {
        title: 'Context',
        type: 'context'
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
