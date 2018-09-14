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
        [
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'lost',
          'new',
          'new',
          'new',
          'new',
          'new',
          'new',
          'new',
          'new'
        ]
      ]
    },
    cta: {
      submitValue: 'Question suivante',
      disabled: false
    },
    team: {
      num: 1,
      members: [
        {
          name: 'Katrine',
          avatar: 'https://api.adorable.io/avatars/150/Katrine.png',
          isCorrect: true
        },
        {name: 'Joe', avatar: 'https://api.adorable.io/avatars/150/Joe.png', isCorrect: false},
        {name: 'Kim', avatar: 'https://api.adorable.io/avatars/150/Kim.png', isCorrect: null}
      ]
    }
  }
};
