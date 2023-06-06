export default {
  props: {
    title: 'Population',
    placeholder: "Type 'c'",
    value: '',
    description: '',
    required: false,
    onInput: value => {
      console.log(`onInput ${value}`);
    },
    onFetch: ({value}) => {
      console.log(`onFetch ${value}`);
    },
    onClear: () => {
      console.log('onClear');
    },
    onSuggestionSelected: data => {
      console.log('onSuggestionSelected', data);
    }
  }
};
