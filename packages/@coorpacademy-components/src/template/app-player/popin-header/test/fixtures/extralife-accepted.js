export default {
  props: {
    type: 'popinCorrection',
    failed: true,
    extraLifeGranted: true,
    animated: true,
    lives: 0,
    title: 'Aïe Aïe Aïe',
    subtitle: 'Mauvaise réponse',
    corrections: [{answer: 'Je ne sais pas', isCorrect: false}],
    cta: {
      title: 'Next',
      href: '#'
    }
  }
};
