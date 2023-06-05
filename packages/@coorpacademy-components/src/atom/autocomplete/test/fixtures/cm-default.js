export default {
  props: {
    title: 'Input name',
    value: 'c',
    description: '',
    required: false,
    error: false,
    suggestions: [
      {
        name: 'C',
        value: 1972
      },
      {
        name: 'C#',
        value: 2000
      },
      {
        name: 'C++',
        value: 1983
      }
    ],
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
