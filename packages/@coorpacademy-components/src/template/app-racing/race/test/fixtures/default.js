export default {
  props: {
    info: {
      title: 'Bonne réponse !',
      success: true,
      gameOver: false
    },
    race: {
      goal: 8,
      towers: [
        ['removed', 'lost', 'new', 'new', 'new'],
        ['placed', 'placed', 'placed', 'placed', 'new', 'new', 'new'],
        ['removed', 'lost', 'lost', 'lost', 'placed', 'placed'],
        ['placed', 'placed'],
        ['removed', 'placed', 'placed', 'new', 'new']
      ]
    },
    cta: {
      submitValue: 'Question suivante',
      disabled: false
    }
  }
};
