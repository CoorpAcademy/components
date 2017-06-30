export default {
  props: {
    lives: 3,
    fail: true,
    title: 'Good job',
    subtitle: 'Bonne réponse',
    corrections: [{answer: 'Correct', isCorrect: true}],
    cta: {
      title: 'Continuer',
      href: '#'
    }
  }
};
