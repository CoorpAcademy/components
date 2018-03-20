export default {
  props: {
    value: '',
    placeholder: 'Search for a course',
    onChange: value => {
      console.log(value);
    }
  }
};
