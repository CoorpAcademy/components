export default {
  props: {
    header: {
      lives: 1,
      title: '',
      subtitle: '',
      cta: {
        title: '',
        onClick: () => {}
      }
    },
    question: {
      header: '',
      answer: ''
    },
    ressources: {
      title: 'Voir le cours',
      value: [],
      open: false,
      onClick: () => {}
    },
    klf: {
      title: 'Point clés',
      value: '',
      onClick: () => {},
      open: false
    },
    tips: {
      title: 'Le saviez vous',
      value: '',
      onClick: () => {},
      open: false
    }
  }
};
