export default {
  props: {
    value: 'big data - le retour',
    placeholder: 'Name, last name…',
    onChange: value => {
      console.log(value);
    },
    onKeyPress: value => {
      console.log(value);
    }
  }
};
