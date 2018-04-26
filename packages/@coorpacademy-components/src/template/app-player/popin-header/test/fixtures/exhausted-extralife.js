export default {
  props: {
    fail: true,
    revival: false,
    animated: true,
    lives: 0,
    title: 'Aïe Aïe Aïe',
    extraLife: {
      active: false,
      exhausted: true,
      sentence: 'Désolé, vous avez utilisé votre bonus !'
    },
    subtitle: 'Mauvaise réponse',
    corrections: [{answer: 'Je ne sais pas', isCorrect: false}],
    cta: {
      title: 'Next',
      href: '#'
    }
  }
};
