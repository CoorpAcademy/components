export default {
  props: {
    header: null,
    recommendation: {
      title: 'Sujets associés :',
      cards: null
    },
    // feedback: {
    //   title: 'Donnez votre avis sur ce cours',
    //   value: '',
    //   onChange: value => {},
    //   sumitValue: 'Post',
    //   onSumbit: () => {},
    //   sent: false
    // },
    footer: {
      title: 'Back to home',
      href: '#'
    }
  }
};
