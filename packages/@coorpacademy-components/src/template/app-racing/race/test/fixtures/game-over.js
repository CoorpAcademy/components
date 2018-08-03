export default {
  props: {
    info: {
      title: null,
      success: null,
      gameOver: true
    },
    race: {
      goal: 8,
      towers: [
        ['removed', 'lost', 'new', 'new', 'new'],
        ['placed', 'placed', 'placed', 'placed', 'new', 'new', 'new'],
        ['removed', 'lost', 'lost', 'lost', 'placed', 'placed'],
        ['placed', 'placed'],
        ['removed', 'placed', 'placed', 'placed', 'new', 'new', 'new', 'new', 'new']
      ]
    },
    cta: {
      submitValue: 'Question suivante',
      disabled: true
    }
  }
};
