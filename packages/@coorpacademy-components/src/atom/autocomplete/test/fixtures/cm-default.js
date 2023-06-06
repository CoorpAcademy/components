export default {
  props: {
    title: 'Population',
    placeholder: "Type 'c'",
    value: '',
    description: '',
    required: false,
    theme: 'coorpmanager',
    onChange: value => {
      console.log(`onChange ${value}`);
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
