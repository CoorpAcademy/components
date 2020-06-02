const suggestions = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  }
];

export default {
  props: {
    title: 'Population',
    value: 'c',
    suggestions,
    onChange: e => {
      const value = e.target.value;
      console.log(`onChange ${value}`, e);
    },
    onFetch: e => {
      const {value} = e;
      console.log(`onFetch ${value}`);
    },
    onClear: e => {
      console.log('onClear', e);
    },
    onSuggestionSelected: data => {
      console.log('onSuggestionSelected', data);
    }
  }
};
