export default {
  props: {
    fail: true,
    lives: 0,
    title: 'Aïe Aïe Aïe',
    extraLife: {
      active: true, // remainingLifeRequests
      sentence: 'Bonus ! Récupérez une vie en regardant la leçon !' // remainingLifeRequestsSentence
    },
    subtitle: 'Mauvaise réponse',
    corrections: [{answer: 'Je ne sais pas', isCorrect: false}],
    cta: {
      title: 'Game Over',
      href: '#'
    }
  }
};
