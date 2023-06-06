export default {
  props: {
    title: 'Population',
    value: 'c',
    description: '',
    required: false,
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
