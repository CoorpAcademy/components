export default {
  props: {
    fail: true,
    revival: true,
    animated: true,
    lives: 1,
    title: 'Aïe Aïe Aïe',
    extraLife: {
      active: true,
      sentence: 'Bonus ! Récupérez une vie en regardant la leçon !'
    },
    subtitle: 'Mauvaise réponse',
    corrections: [{answer: 'Je ne sais pas', isCorrect: false}],
    cta: {
      title: 'Next',
      href: '#'
    }
  }
};
