export default {
  props: {
    title: 'Population',
    placeholder: "Type 'c'",
    value: '',
    suggestions: [],
    onChange: value => {
      console.log(`onChange ${value}`);
    },
    onFetch: ({value}) => {
      console.log(`onFetch ${value}`);
    },
    onClear: () => {
      console.log('onClear');
    }
  }
};
