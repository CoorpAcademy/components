export default {
  props: {
    title: 'Input name',
    value: 'This is an input',
    description: '',
    required: false,
    error: false,
    suggestions: [],
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
