export default {
  props: {
    value: '',
    placeholder: 'Name, last name…',
    onChange: value => {
      console.log(value);
    }
  }
};
