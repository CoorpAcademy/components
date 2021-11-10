export default {
  props: {
    value: 'big data - le retour',
    placeholder: 'Search for a course',
    onChange: value => {
      console.log(value);
    },
    onEnter: () => console.log('pressed enter'),
    onFocus: () => console.log('onFocus')
  }
};
