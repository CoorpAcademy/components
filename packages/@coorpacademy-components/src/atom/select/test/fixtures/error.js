export default {
  props: {
    title: 'Propriétés de la marque :',
    error: true,
    options: [
      {
        name: '',
        value: '',
        selected: true
      },
      {
        name: 'Pouet',
        value: 'Pouet',
        selected: false
      },
      {
        name: 'Pouet2',
        value: 'Pouet2',
        selected: false
      }
    ],
    onChange: value => console.log(value)
  }
};
