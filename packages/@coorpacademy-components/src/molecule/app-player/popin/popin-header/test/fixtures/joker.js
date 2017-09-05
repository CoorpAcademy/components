export default {
  props: {
    fail: true,
    remainingLifeRequests: 1,
    lives: 0,
    title: 'Aïe Aïe Aïe',
    remainingLifeRequestsSentence: 'Bonus ! Récupérez une vie en regardant la leçon !',
    subtitle: 'Mauvaise réponse',
    corrections: [{answer: 'Je ne sais pas', isCorrect: false}],
    cta: {
      title: 'Game Over',
      href: '#'
    }
  }
};
