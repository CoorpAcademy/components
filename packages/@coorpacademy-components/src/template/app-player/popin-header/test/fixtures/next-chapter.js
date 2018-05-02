export default {
  props: {
    lives: 3,
    failed: false,
    title: 'Good job',
    subtitle: 'Bonne réponse',
    corrections: [{answer: 'Correct', isCorrect: true}],
    cta: {
      title: 'Continuer',
      nextStepTitle:
        "2/8 Qu'est-ce que le Big Data ? Vous ne le savez pas encore, voici le prochain sujet",
      href: '#'
    }
  }
};
