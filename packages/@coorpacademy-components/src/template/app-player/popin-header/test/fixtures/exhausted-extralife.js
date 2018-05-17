export default {
  props: {
    type: 'popinCorrection',
    failed: true,
    extraLifeGranted: false,
    animated: true,
    lives: 0,
    title: 'Aïe Aïe Aïe',
    gameOver: true,
    subtitle: 'Mauvaise réponse',
    corrections: [{answer: 'Je ne sais pas', isCorrect: false}],
    cta: {
      title: 'Game Over',
      nextStepTitle: 'Click to continue',
      onClick: e => console.log(e.target)
    }
  }
};
