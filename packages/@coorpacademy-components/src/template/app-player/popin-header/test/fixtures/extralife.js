export default {
  props: {
    type: 'popin-correction',
    failed: true,
    extraLifeGranted: false,
    lives: 0,
    title: 'Aïe Aïe Aïe',
    animated: true,
    subtitle: 'Mauvaise réponse',
    corrections: [{answer: 'Je ne sais pas', isCorrect: false}]
  }
};
