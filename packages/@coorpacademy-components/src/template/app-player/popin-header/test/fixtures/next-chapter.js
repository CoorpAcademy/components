export default {
  props: {
    lives: 3,
    fail: false,
    title: 'Good job',
    subtitle: 'Bonne réponse',
    corrections: [{answer: 'Correct', isCorrect: true}],
    extraLife: {
      active: false,
      sentence: 'Bonus ! Récupérez 1 vie en regardant la leçon !'
    },
    cta: {
      title: 'Continuer',
      nextStepTitle:
        "2/8 Qu'est-ce que le Big Data ? Vous ne le savez pas encore, voici le prochain sujet",
      href: '#'
    }
  }
};
