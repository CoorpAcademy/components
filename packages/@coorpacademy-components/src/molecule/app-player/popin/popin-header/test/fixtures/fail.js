export default {
  props: {
    fail: true,
    jokers: 0,
    lives: 2,
    title: 'Aïe Aïe Aïe',
    subtitle: 'Mauvaise réponse',
    corrections: [{answer: 'Je ne sais pas', isCorrect: false}],
    cta: {
      title: 'Continuer',
      href: '#'
    }
  }
};
