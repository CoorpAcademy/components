export default {
  props: {
    fail: true,
    jokers: 0,
    lives: 0,
    title: 'Aïe Aïe Aïe',
    jokerContent: 'Bonus ! Récupérez une vie en regardant la leçon !',
    subtitle: 'Mauvaise réponse',
    corrections: [{answer: 'Je ne sais pas', isCorrect: false}],
    cta: {
      title: 'Game Over',
      isJoker: true,
      href: '#'
    }
  }
};
