export default {
  props: {
    buttons: [
      {
        title: 'Media',
        type: 'media',
        selected: true
      },
      {
        title: 'Clue',
        type: 'clue',
        hasClue: false
      },
      {
        title: 'Coach',
        type: 'coach',
        disabled: true
      }
    ]
  }
};
