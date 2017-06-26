export default {
  props: {
    fail: true,
    lives: 2,
    title: 'Aïe Aïe Aïe',
    subtitle: 'Mauvaise réponse',
    corrections: [
      {
        answer: 'Apple',
        isCorrect: false
      },
      {
        answer: 'Microsoft',
        isCorrect: true
      },
      {
        answer: 'Google',
        isCorrect: false
      },
      {
        answer: 'Facebook',
        isCorrect: true
      }
    ],
    cta: {
      title: 'Continuer',
      href: '#'
    }
  }
};
