export default {
  props: {
    lives: 3,
    fail: false,
    title: 'Good job',
    subtitle: 'Bonne réponse',
    corrections: [{answer: 'Correct', isCorrect: true}],
    extraLife: {
      active: false, // remainingLifeRequests
      sentence: 'Bonus ! Récupérez 1 vie en regardant la leçon !' // remainingLifeRequestsSentence
    },
    cta: {
      title: 'Continuer',
      href: '#'
    }
  }
};
