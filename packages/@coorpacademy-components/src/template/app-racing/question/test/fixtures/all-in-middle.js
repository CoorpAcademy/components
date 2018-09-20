import Answer from '../../../../../molecule/answer/test/fixtures/default';

const {props: answerType} = Answer;

export default {
  props: {
    slide: {
      typeClue: 'answer',
      question:
        'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
      help: 'Select something below',
      answerType,
      cta: {
        submitValue: 'Validate',
        onClick: console.log,
        light: false,
        small: false,
        name: 'validateAnswerCTA',
        secondary: false,
        disabled: false
      }
    },
    team: {
      num: 1,
      members: [
        {
          name: 'Katrine',
          avatar: 'https://api.adorable.io/avatars/150/Katrine.png',
          isCorrect: null
        },
        {
          name: 'Joe',
          avatar: 'https://api.adorable.io/avatars/150/Joe.png',
          isCorrect: null,
          isMe: true
        },
        {name: 'Kim', avatar: 'https://api.adorable.io/avatars/150/Kim.png', isCorrect: null}
      ]
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
    }
  }
};
