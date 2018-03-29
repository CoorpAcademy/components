export default {
  props: {
    value: '',
    placeholder: 'Search for a course',
    onChange: value => {
      console.log(value);
    },
    onFocus: () => console.log('onFocus'),
    onBlur: () => console.log('blur')
  }
};
