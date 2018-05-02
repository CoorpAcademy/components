export default {
  props: {
    failed: true,
    extraLifeGranted: false,
    animated: true,
    lives: 0,
    title: 'Aïe Aïe Aïe',
    gameOver: {
      sentence: 'Désolé, vous avez utilisé votre bonus !'
    },
    subtitle: 'Mauvaise réponse',
    corrections: [{answer: 'Je ne sais pas', isCorrect: false}],
    cta: {
      title: 'Game Over',
      nextStepTitle: 'No more life left',
      href: '#'
    }
  }
};
