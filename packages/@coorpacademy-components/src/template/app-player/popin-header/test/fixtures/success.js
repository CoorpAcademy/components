export default {
  props: {
    type: 'popinCorrection',
    lives: 3,
    failed: false,
    title: 'Good job',
    subtitle: 'Bonne réponse',
    corrections: [{answer: 'Correct', isCorrect: true}],
    cta: {
      title: 'Continuer',
      href: '#'
    }
  }
};
